from rest_framework.routers import DefaultRouter
from .views import LocationViewSet, RouteViewSet

# Registers viewsets to create automatic route endpoints
router = DefaultRouter()
router.register(r'locations', LocationViewSet, basename='location')
router.register(r'routes', RouteViewSet, basename='route')

# This makes sure DRF automatically maps to /locations/ and /routes/
urlpatterns = router.urls
