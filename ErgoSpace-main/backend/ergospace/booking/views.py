from django.shortcuts import render
from rest_framework import generics
from .models import WorkspaceBooking
from rest_framework.views import APIView
from .serializers import WorkspaceBookingSerializer
from django.shortcuts import get_object_or_404
import razorpay
from django.conf import settings
from rest_framework.response import Response
from rest_framework import status
from users.permissions import IsCustomerPermission,IsProviderPermission
from rest_framework.permissions import IsAuthenticated
from datetime import datetime, timedelta
from django.utils import timezone
from django.utils.dateparse import parse_datetime
# Create your views here.


class WorkspaceCheckAvailabilityAPIView(APIView):
    permission_classes = [IsAuthenticated,IsCustomerPermission]


    def post(self, request):
        seat_id = request.data.get('seat_id')
        requested_start = parse_datetime(request.data.get('start_time'))
        requested_end = parse_datetime(request.data.get('end_time'))

        if not seat_id or not requested_start or not requested_end:
            return Response({"error": "Missing seat_id or start_time or end_time."}, status=400)

        if requested_start >= requested_end:
            return Response({"error": "start_time must be before end_time."}, status=400)
        
        #  ✅ Check: User cannot book past time
        now = timezone.now()
        if requested_end <= now:
            return Response({"error": "Cannot book a time in the past."}, status=400)


        overlapping_bookings = WorkspaceBooking.objects.filter(
            seat_id=seat_id,
            status='completed',
            start_time__lt=requested_end,
            end_time__gt=requested_start
        ).order_by('start_time')

        selected_slot_available = not overlapping_bookings.exists()

        # If slot is available, just return available
        if selected_slot_available:
            return Response({"selected_slot_available": True})

        # Else slot is NOT available
        response_data = {
            "selected_slot_available": False
        }

        total_days = (requested_end - requested_start).days

        # Booking for hours (same day)
        if total_days == 0:
            day = requested_start.date()
            bookings = WorkspaceBooking.objects.filter(seat_id=seat_id).first()
            start_of_day = timezone.make_aware(datetime.combine(day, bookings.seat.workspace.start_time))
            end_of_day = timezone.make_aware(datetime.combine(day, bookings.seat.workspace.end_time))
            print(start_of_day)
            print(end_of_day)
            # start_of_day =  timezone.make_aware(datetime.combine(day, datetime.min.time()))
            # end_of_day =  timezone.make_aware(datetime.combine(day, datetime.max.time()))

            bookings_today = WorkspaceBooking.objects.filter(
                seat_id=seat_id,
                status='completed',
                start_time__lt=end_of_day,
                end_time__gt=start_of_day
            ).order_by('start_time')

            # Prepare conflicting slots
            conflicting_hours = [
                {
                    "start_time": booking.start_time.isoformat(),
                    "end_time": booking.end_time.isoformat()
                }
                for booking in bookings_today
            ]
            response_data["conflicting_hours"] = conflicting_hours

            # Find free slots
            free_slots = []
            current_time = start_of_day

            for booking in bookings_today:
                if current_time < booking.start_time:
                    free_slots.append({
                        "start_time": current_time.isoformat(),
                        "end_time": booking.start_time.isoformat()
                    })
                current_time = max(current_time, booking.end_time)

            if current_time < end_of_day:
                free_slots.append({
                    "start_time": current_time.isoformat(),
                    "end_time": end_of_day.isoformat()
                })

            response_data["suggested_free_hours"] = free_slots

        # Booking for days
        elif 1 <= total_days < 30:
            month_start = requested_start.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
            if month_start.month == 12:
                month_end = month_start.replace(year=month_start.year+1, month=1)
            else:
                month_end = month_start.replace(month=month_start.month+1)

            bookings_in_month = WorkspaceBooking.objects.filter(
                seat_id=seat_id,
                status='completed',
                start_time__lt=month_end,
                end_time__gt=month_start
            )

            busy_days = set()
            for booking in bookings_in_month:
                current_day = booking.start_time.date()
                while current_day <= booking.end_time.date():
                    busy_days.add(current_day)
                    current_day += timedelta(days=1)

            response_data["busy_days"] = sorted([day.isoformat() for day in busy_days])

            # Suggest free days
            all_days_in_month = []
            current_day = month_start.date()
            while current_day < month_end.date():
                all_days_in_month.append(current_day)
                current_day += timedelta(days=1)

            free_days = [day.isoformat() for day in all_days_in_month if day not in busy_days]
            response_data["suggested_free_days"] = free_days

        # Booking for months
        else:
            year_start = requested_start.replace(month=1, day=1, hour=0, minute=0, second=0, microsecond=0)
            year_end = requested_start.replace(month=12, day=31, hour=23, minute=59, second=59)

            bookings_in_year = WorkspaceBooking.objects.filter(
                seat_id=seat_id,
                status='completed',
                start_time__lt=year_end,
                end_time__gt=year_start
            )

            busy_months = set()
            for booking in bookings_in_year:
                current = booking.start_time
                while current <= booking.end_time:
                    busy_months.add(current.strftime('%Y-%m'))
                    if current.month == 12:
                        current = current.replace(year=current.year+1, month=1, day=1)
                    else:
                        current = current.replace(month=current.month+1, day=1)

            response_data["busy_months"] = sorted(list(busy_months))

            # Suggest free months
            all_months = []
            for month in range(1, 13):
                all_months.append(f"{requested_start.year}-{month:02d}")

            free_months = [m for m in all_months if m not in busy_months]
            response_data["suggested_free_months"] = free_months

        return Response(response_data)


class WorkspaceBookingCreateView(generics.ListCreateAPIView):
    queryset = WorkspaceBooking.objects.all()
    serializer_class = WorkspaceBookingSerializer
    permission_classes = [IsAuthenticated,IsCustomerPermission]


class WorkspaceBookingConfirmView(APIView):
    permission_classes = [IsAuthenticated,IsCustomerPermission]

    def post(self,request):
        
        order_id = request.data.get('razorpay_order_id')
        payment_id = request.data.get('razorpay_payment_id')
        signature_id = request.data.get('razorpay_signature')

        booking = get_object_or_404(WorkspaceBooking,order_id = order_id)

        if booking.booked_by != request.user:
            return Response({'error': 'You are not authorized to confirm this booking'}, status=status.HTTP_403_FORBIDDEN)

        data = {
            'razorpay_order_id': booking.order_id,
            'razorpay_payment_id': payment_id,
            'razorpay_signature': signature_id,
        }

        client = razorpay.Client(auth=(settings.RAZORPAY_PUBLIC_KEY,settings.RAZORPAY_SECRET_KEY))

        check = client.utility.verify_payment_signature(data)

        if check is None:
            WorkspaceBooking.objects.filter(id=booking.id).update(
                payment_id = payment_id,
                signature_id = signature_id,
                status = 'completed',
            )
            response = Response({
            'message':'Booking Confirmed',
            'order_id' : payment_id,
            },status=status.HTTP_200_OK)
        else:
            WorkspaceBooking.objects.filter(id=booking.id).update(
                payment_id = payment_id,
                signature_id = signature_id,
                status = 'failed',
            )
            response = Response({
            'message':'Booking Failed',
            'order_id' : payment_id,
            },status=status.HTTP_404_NOT_FOUND)

        return response


