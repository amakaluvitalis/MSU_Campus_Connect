from rest_framework import viewsets, permissions
from .models import Event
from .serializers import EventSerializer
from .tasks import send_event_notification

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        event = serializer.save(creator=self.request.user)
        send_event_notification.delay(event.id)
