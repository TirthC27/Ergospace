from django.shortcuts import render
from .serializers import UserRegisterSerializer,UserLoginSerializer
from rest_framework import generics,status
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.permissions import AllowAny,IsAuthenticated
from django.contrib.auth import logout
# Create your views here.


'''
    User Register View
'''
class UserRegisterView(generics.CreateAPIView):

    serializer_class = UserRegisterSerializer
    permission_classes = [AllowAny]
    

'''
    User login view 
    this view takes email and password then authenticates with the database  data and then it creates a token
    which is then sent in thr response
'''
class UserLoginView(APIView):

    permission_classes = [AllowAny]

    def post(self,request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token , created = Token.objects.get_or_create(user=user)
        response = Response({
            'Bearer':token.key,
            'Full name':f"{user.first_name} {user.last_name}",
            'username': user.username,
            'user_type': user.user_type,
            'id': user.id,
        },status=status.HTTP_200_OK)
        response.set_cookie('auth_token', token.key, httponly=True)
        return response
    

''' 
    User Logout view
    this is the user logout view 
    here we are deleteing the token from the database token model
    we are also using django built in logout method which logs out session.
    we are returing the status 200 and loggedd out succesfully message
'''
class UserLogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self,request):
        try:
            request.user.auth_token.delete()
            logout(request)
            response = Response({'message':"User Logged out Successfully"},status=status.HTTP_200_OK)
            response.set_cookie('auth_token', '', httponly=True,secure=False)
        except:
            pass

        return response

        
