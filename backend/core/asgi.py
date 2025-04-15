# ASGI config for Django Channels (handles both HTTP and WebSocket)

import os
import django
from channels.routing import ProtocolTypeRouter
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

#Correct import path (assuming routing.py is in the core app)
from core.routing import application
