from rest_framework.routers import DefaultRouter
from .views import LocationViewSet, RouteViewSet

router = DefaultRouter()
router.register(r'locations', LocationViewSet, basename='location')
router.register(r'routes', RouteViewSet, basename='route')

urlpatterns = router.urls
