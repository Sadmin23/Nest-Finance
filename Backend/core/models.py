from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)

    first_name = None
    last_name = None
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


class Token(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_id')
    refresh_token = models.CharField(max_length=300, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)