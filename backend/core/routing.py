# Combines all WebSocket routes across apps

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application

# WebSocket URL patterns from individual apps
from events.routing import websocket_urlpatterns as event_ws
from networking.routing import websocket_urlpatterns as networking_ws
from navigation.routing import websocket_urlpatterns as navigation_ws

# Combine all WebSocket routes
websocket_urlpatterns = event_ws + networking_ws + navigation_ws

# Final ASGI application (WebSocket only here)
application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(websocket_urlpatterns)
    ),
})
