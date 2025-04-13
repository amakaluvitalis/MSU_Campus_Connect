# ASGI config for Django Channels (handles both HTTP and WebSocket)

import os
import django
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import networking.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from routing import application as channel_routing

# Handle both HTTP and WebSocket
application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(
            networking.routing.websocket_urlpatterns  # Only networking included here
        )
    ),
})
