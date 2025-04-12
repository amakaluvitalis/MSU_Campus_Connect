# navigation/consumers.py

import json
from channels.generic.websocket import AsyncWebsocketConsumer

class LocationTrackingConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.user_id = self.scope["url_route"]["kwargs"]["user_id"]
        self.room_group_name = f"location_{self.user_id}"

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        data = json.loads(text_data)
        latitude = data['latitude']
        longitude = data['longitude']

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'location_update',
                'latitude': latitude,
                'longitude': longitude,
                'user_id': self.user_id
            }
        )

    async def location_update(self, event):
        await self.send(text_data=json.dumps({
            'user_id': event['user_id'],
            'latitude': event['latitude'],
            'longitude': event['longitude']
        }))
