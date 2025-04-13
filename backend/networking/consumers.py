import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from .models import Message
from django.contrib.auth import get_user_model

User = get_user_model()

# WebSocket consumer to handle real-time chat between users
class ChatConsumer(AsyncWebsocketConsumer):

    # Called when WebSocket connection is opened
    async def connect(self):
        self.user = self.scope["user"]
        self.other_user = self.scope["url_route"]["kwargs"]["username"]

        # Room name is a combination of both usernames (alphabetically ordered)
        self.room_name = f"chat_{min(self.user.username, self.other_user)}_{max(self.user.username, self.other_user)}"
        self.room_group_name = f"chat_{self.room_name}"

        # Join the chat room group
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        await self.accept()

    # Called when WebSocket is disconnected
    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    # Called when a message is received from the WebSocket
    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data["message"]

        receiver = await self.get_user(self.other_user)
        saved_message = await self.save_message(self.user, receiver, message)

        # Broadcast message to everyone in the room group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                "type": "chat_message",
                "message": message,
                "sender": self.user.username,
                "timestamp": str(saved_message.timestamp),
            },
        )

    # Handles the actual sending of messages over WebSocket
    async def chat_message(self, event):
        await self.send(text_data=json.dumps({
            "message": event["message"],
            "sender": event["sender"],
            "timestamp": event["timestamp"]
        }))

    # Helper method to get a user object from username
    @database_sync_to_async
    def get_user(self, username):
        return User.objects.get(username=username)

    # Helper method to save message to DB
    @database_sync_to_async
    def save_message(self, sender, receiver, message):
        return Message.objects.create(sender=sender, receiver=receiver, content=message)
