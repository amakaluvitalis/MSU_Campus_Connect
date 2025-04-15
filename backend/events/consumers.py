import json
from channels.generic.websocket import AsyncWebsocketConsumer

# Handles real-time interactions for a specific event
class EventConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        self.event_id = self.scope['url_route']['kwargs']['event_id']
        self.group_name = f'event_{self.event_id}'

        # Join group for this event
        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave the event group
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        """
        Handle incoming WebSocket message.
        Can be used for RSVP or other event interactions.
        """
        data = json.loads(text_data)
        message_type = data.get("type")

        # Broadcast message to all connected clients in this group
        await self.channel_layer.group_send(
            self.group_name,
            {
                'type': 'event_update',
                'message': data.get("message", ""),
                'event_id': self.event_id,
                'user': data.get("user", "Anonymous"),
                'update_type': message_type or "update",
            }
        )

    async def event_update(self, event):
        """
        Send update to WebSocket client.
        """
        await self.send(text_data=json.dumps({
            'type': event['update_type'],
            'event_id': event['event_id'],
            'user': event['user'],
            'message': event['message'],
        }))
