# Celery config for background task processing

from __future__ import absolute_import, unicode_literals
import os
from celery import Celery

# Load settings from Django project
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")

# Initialize Celery app
app = Celery("core")

# Load config from Django settings with 'CELERY_' prefix
app.config_from_object("django.conf:settings", namespace="CELERY")

# Automatically discover tasks from all registered apps
app.autodiscover_tasks()
