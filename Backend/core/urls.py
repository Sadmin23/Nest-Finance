from django.urls import path
from .views import LoginAPIView, LogoutAPIView, RefreshTokenAPIView, RegisterAPIView, UserAPIView

urlpatterns = [
    path('register', RegisterAPIView.as_view()),
    path('login', LoginAPIView.as_view()),
    path('user', UserAPIView.as_view()),
    path('refresh_token', RefreshTokenAPIView.as_view()),
    path('logout',LogoutAPIView.as_view())
]
