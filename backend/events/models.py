from django.db import models
from django.conf import settings

class Event(models.Model):
    creator = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="events")
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    date = models.DateTimeField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title
