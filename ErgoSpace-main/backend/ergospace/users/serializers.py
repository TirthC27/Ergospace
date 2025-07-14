from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User


'''
    This  is the user registration serializer
    it takes firstname, lastname, email, password, usertype.
    it validates email and checks it should be unique or it will raise a validaion error
    it creates the user 
    returns user object
'''
class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True,style={'input_type': 'password'})
    class Meta:
        model = User
        fields = [
            'first_name',
            'last_name',
            'email',
            'password',
            'user_type',
        ]
    def validate_email(self,value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email is already registered.")
        return value
    
    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            email = validated_data['email'],
            password= validated_data['password'],
            user_type = validated_data['user_type']
        )
        return user

class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True,style={'input_type': 'password'})

    def validate(self, data):
        user = authenticate(username=data['email'],password=data['password'])
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Invalid Credentials")
        
class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    first_name = serializers.CharField(read_only=True)
    last_name = serializers.CharField(read_only=True)
    email = serializers.EmailField(read_only=True)

