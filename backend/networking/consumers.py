import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from django.contrib.auth import get_user_model
from django.apps import apps

# WebSocket consumer to handle real-time chat between users
class ChatConsumer(AsyncWebsocketConsumer):

    # Called when WebSocket connection is opened
    async def connect(self):
        self.user = self.scope["user"]
        self.other_user = self.scope["url_route"]["kwargs"]["username"]

        # Generate a consistent room name based on both usernames (alphabetically)
        self.room_name = f"chat_{min(self.user.username, self.other_user)}_{max(self.user.username, self.other_user)}"
        self.room_group_name = f"chat_{self.room_name}"

        # Join the room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        # Accept the WebSocket connection
        await self.accept()

    # Called when WebSocket is disconnected
    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # Called when a message is received from the WebSocket
    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data.get("message")

        # Get the receiving user and save the message to the database
        receiver = await self.get_user(self.other_user)
        saved_message = await self.save_message(self.user, receiver, message)

        # Broadcast the message to the room group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                "type": "chat_message",
                "message": message,
                "sender": self.user.username,
                "timestamp": str(saved_message.timestamp),
            },
        )

    # Broadcast message to connected WebSocket clients
    async def chat_message(self, event):
        await self.send(text_data=json.dumps({
            "message": event["message"],
            "sender": event["sender"],
            "timestamp": event["timestamp"]
        }))

    # Async helper: Get a user object from username
    @database_sync_to_async
    def get_user(self, username):
        User = get_user_model()  # Lazy loading here avoids AppRegistryNotReady
        return User.objects.get(username=username)

    # Async helper: Save message to the DB
    @database_sync_to_async
    def save_message(self, sender, receiver, message):
        Message = apps.get_model('networking', 'Message')  # Lazy load the model
        return Message.objects.create(sender=sender, receiver=receiver, content=message)
