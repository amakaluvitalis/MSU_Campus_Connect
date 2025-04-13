from rest_framework import viewsets, permissions
from .models import Event
from .serializers import EventSerializer
from .tasks import send_event_notification

# Handles CRUD operations for Event model
class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.IsAuthenticated]

    # Automatically set the creator to the logged-in user and trigger notification task
    def perform_create(self, serializer):
        event = serializer.save(creator=self.request.user)
        send_event_notification.delay(event.id)  # Sends async notification using Celery
