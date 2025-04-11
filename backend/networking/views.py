from rest_framework import viewsets, permissions
from .models import FriendRequest, Message
from .serializers import FriendRequestSerializer, MessageSerializer

class FriendRequestViewSet(viewsets.ModelViewSet):
    queryset = FriendRequest.objects.all()
    serializer_class = FriendRequestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(from_user=self.request.user)

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(sender=self.request.user)

    def get_queryset(self):
        # Show only chats between this user and others
        user = self.request.user
        return Message.objects.filter(sender=user) | Message.objects.filter(receiver=user)
