from rest_framework import serializers
from .models import FriendRequest, Message

class FriendRequestSerializer(serializers.ModelSerializer):
    from_user = serializers.ReadOnlyField(source='from_user.username')

    class Meta:
        model = FriendRequest
        fields = '__all__'
        read_only_fields = ['from_user']

class MessageSerializer(serializers.ModelSerializer):
    sender = serializers.ReadOnlyField(source='sender.username')

    class Meta:
        model = Message
        fields = '__all__'
        read_only_fields = ['sender']
