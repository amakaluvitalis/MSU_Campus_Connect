from rest_framework import viewsets, permissions
from .models import FriendRequest, Message
from .serializers import FriendRequestSerializer, MessageSerializer

# ViewSet to handle Friend Request CRUD operations
class FriendRequestViewSet(viewsets.ModelViewSet):
    queryset = FriendRequest.objects.all()
    serializer_class = FriendRequestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        # Set the logged-in user as the sender of the friend request
        serializer.save(from_user=self.request.user)

# ViewSet to handle chat messages
class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        # Set the sender of the message as the logged-in user
        serializer.save(sender=self.request.user)

    def get_queryset(self):
        # Only return messages that involve the current user (either as sender or receiver)
        user = self.request.user
        return Message.objects.filter(sender=user) | Message.objects.filter(receiver=user)
