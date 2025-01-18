from rest_framework.serializers import ModelSerializer
from django.contrib.auth.hashers import make_password
from .models import User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }
    
    def create(self, validated_data):
        user = User.objects.create(
        email=validated_data['email'],
        name=validated_data['name'],
        password = make_password(validated_data['password']))
        return user
