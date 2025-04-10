from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    # JWT auth
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # App-specific routes
    path('accounts/', include('accounts.urls')),
    path('events/', include('events.urls')),
    path('networking/', include('networking.urls')),
    path('navigation/', include('navigation.urls')),
]
