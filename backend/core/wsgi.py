"""
WSGI config for core project.
Used for deploying the Django app using WSGI servers (e.g., Gunicorn, uWSGI).
"""

import os
from django.core.wsgi import get_wsgi_application

# Set the default settings module for the 'core' project
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")

# WSGI application entry point
application = get_wsgi_application()
