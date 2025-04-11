from rest_framework.routers import DefaultRouter
from .views import FriendRequestViewSet, MessageViewSet

router = DefaultRouter()
router.register(r'friends', FriendRequestViewSet, basename='friendrequest')
router.register(r'messages', MessageViewSet, basename='message')

urlpatterns = router.urls
