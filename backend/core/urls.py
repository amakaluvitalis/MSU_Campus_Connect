from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),     # Django admin
    path('api/', include('api.urls')),   # Main API router (api/urls.py)
]

# Serve static files during development (especially for drf-yasg docs)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)