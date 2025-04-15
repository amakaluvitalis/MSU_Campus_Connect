from django.urls import re_path
from . import consumers

# Defines WebSocket URL patterns for location tracking
websocket_urlpatterns = [
    re_path(r'ws/navigation/(?P<user_id>\w+)/$', consumers.LocationTrackingConsumer.as_asgi()),
]
