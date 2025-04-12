# backend/routing.py

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter

# Import WebSocket URL patterns from each module
from events.routing import websocket_urlpatterns as event_ws
from networking.routing import websocket_urlpatterns as networking_ws
from navigation.routing import websocket_urlpatterns as navigation_ws

# Combine all module routes
websocket_urlpatterns = event_ws + networking_ws + navigation_ws

application = ProtocolTypeRouter({
    "websocket": AuthMiddlewareStack(
        URLRouter(websocket_urlpatterns)
    ),
})
