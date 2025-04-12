import json
from channels.generic.websocket import AsyncWebsocketConsumer

class EventConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.event_id = self.scope['url_route']['kwargs']['event_id']
        self.group_name = f'event_{self.event_id}'

        # Join event group
        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave event group
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        """
        Handle incoming messages from the WebSocket.
        Example: a user RSVPs to the event
        """
        data = json.loads(text_data)
        message_type = data.get("type")

        # Broadcast the data to everyone in the group
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
        Called when a message is sent to the group.
        """
        await self.send(text_data=json.dumps({
            'type': event['update_type'],
            'event_id': event['event_id'],
            'user': event['user'],
            'message': event['message'],
        }))
