from rest_framework.routers import DefaultRouter
from .views import EventViewSet

router = DefaultRouter()
router.register(r'', EventViewSet)  # No prefix used for event routes

urlpatterns = router.urls
