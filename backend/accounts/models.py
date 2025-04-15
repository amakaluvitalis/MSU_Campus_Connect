from django.contrib.auth.models import AbstractUser
from django.db import models

# Custom user model extending Django's built-in AbstractUser
# Adds a 'role' field to differentiate types of users
class CustomUser(AbstractUser):
    # Choices for user roles
    ROLE_CHOICES = [
        ('normal_user', 'Normal User'),
        ('alumni', 'Alumni'),
        ('event_organizer', 'Event Organizer'),
        ('admin', 'Admin'),
    ]

    # Role field for assigning different permissions
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='normal_user')

    def __str__(self):
        # Display username when user is printed
        return self.username
