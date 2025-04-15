from rest_framework import serializers
from .models import FriendRequest, Message

# Serializer for FriendRequest model
class FriendRequestSerializer(serializers.ModelSerializer):
    from_user = serializers.ReadOnlyField(source='from_user.username')  # Display username instead of ID

    class Meta:
        model = FriendRequest
        fields = '__all__'
        read_only_fields = ['from_user']  # Automatically set from the logged-in user

# Serializer for Message model
class MessageSerializer(serializers.ModelSerializer):
    sender = serializers.ReadOnlyField(source='sender.username')  # Display sender username

    class Meta:
        model = Message
        fields = '__all__'
        read_only_fields = ['sender']  # Sender is the logged-in user
