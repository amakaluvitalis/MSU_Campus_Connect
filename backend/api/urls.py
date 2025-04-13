from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework import permissions

# Swagger imports
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# Swagger Schema View Configuration
schema_view = get_schema_view(
   openapi.Info(
      title="MSU Campus Connect API",
      default_version='v1',
      description="API documentation for MSU Campus Connect backend",
      terms_of_service="https://www.example.com/policies/terms/",
      contact=openapi.Contact(email="support@msucampus.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    # JWT Authentication endpoints
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Module-level API endpoints
    path('accounts/', include('accounts.urls')),
    path('events/', include('events.urls')),
    path('networking/', include('networking.urls')),
    path('navigation/', include('navigation.urls')),

    # Swagger Documentation URLs
    path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
