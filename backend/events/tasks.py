from celery import shared_task
from .models import Event

# Asynchronous task to send notifications for new events
@shared_task
def send_event_notification(event_id):
    try:
        event = Event.objects.get(pk=event_id)
        print(f"Send notification for event: {event.title}")
    except Event.DoesNotExist:
        print("Event not found.")
