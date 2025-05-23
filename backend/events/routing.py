from django.urls import re_path
from . import consumers

# WebSocket route for a specific event
websocket_urlpatterns = [
    re_path(r'ws/events/(?P<event_id>\w+)/$', consumers.EventConsumer.as_asgi()),
]
