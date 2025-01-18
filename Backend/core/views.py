from django.shortcuts import render
from rest_framework.authentication import get_authorization_header
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import APIException, AuthenticationFailed
from django.contrib.auth.hashers import check_password

from .authentication import create_access_token, create_refresh_token, decode_access_token, decode_refresh_token
from .serializers import UserSerializer
from .models import Token, User


class RegisterAPIView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class LoginAPIView(APIView):
    def post(self, request):
        user = User.objects.filter(email=request.data['email']).first()

        if not user:
            raise APIException('Invalid credentials!')

        if not check_password(request.data["password"], user.password):
            raise APIException('Invalid Password!')

        access_token = create_access_token(user.id)
        refresh_token = create_refresh_token(user.id)

        token = Token.objects.filter(user=user)
        if token.exists() == False:
            Token.objects.create(refresh_token=refresh_token, user=user)
        else:
            refresh_token_obj = Token.objects.get(user=user.id)
            refresh_token_obj.delete()
            Token.objects.create(refresh_token=refresh_token, user=user)

        response = Response()
        response.set_cookie(key='refreshToken',
                            value=refresh_token, httponly=True)
        response.data = {
            'access_token': access_token
        }
        return response


class UserAPIView(APIView):
    def get(self, request):
        auth = get_authorization_header(request).split()

        if auth and len(auth) == 2:
            token = auth[1].decode('utf-8')
            id = decode_access_token(token)

            user = User.objects.filter(pk=id).first()
            return Response(UserSerializer(user).data)

        raise AuthenticationFailed('Unauthenticated')




class RefreshTokenAPIView(APIView):
    def post(self, request):

        refresh_token = request.COOKIES.get('refreshToken')
        token = Token.objects.filter(refresh_token=refresh_token)

        if token.exists() == True:
            id = decode_refresh_token(refresh_token)
            access_token = create_access_token(id)
            refresh_token = create_refresh_token(id)

            response = Response()
            response.set_cookie(key='refreshToken',
                                value=refresh_token, httponly=True)

            refresh_token_obj = Token.objects.get(user=id)
            refresh_token_obj.refresh_token = refresh_token
            refresh_token_obj.save()

            response.data = {
                'access_token': access_token,
                'refresh_token': refresh_token
            }

        else:
            raise AuthenticationFailed('Invalid refresh token')

        return response 


class LogoutAPIView(APIView):
    def post(self, request):
        refresh_token = request.COOKIES.get('refreshToken')
        refresh_token_object = Token.objects.get(refresh_token=refresh_token)
        refresh_token_object.delete()

        response = Response()
        response.delete_cookie(key="refreshToken")

        response.data = {
            'message': 'Logout Successful'
        }
        return response
