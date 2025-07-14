from rest_framework import serializers
from .models import WorkspaceBooking
from users.serializers import UserSerializer
from users.models import User
from django.conf import settings
import razorpay


class WorkspaceBookingSerializer(serializers.ModelSerializer):
    booked_by = UserSerializer(read_only=True)

    class Meta:
        model = WorkspaceBooking
        fields = '__all__'
        read_only_fields = ['amount','order_id']

    def create(self, validated_data):
        validated_data['booked_by'] = self.context['request'].user
        return super().create(validated_data)
