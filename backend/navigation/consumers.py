import json
from channels.generic.websocket import AsyncWebsocketConsumer

# Handles WebSocket connections to track and broadcast user location
class LocationTrackingConsumer(AsyncWebsocketConsumer):

    # Called when a WebSocket connection is opened
    async def connect(self):
        self.user_id = self.scope["url_route"]["kwargs"]["user_id"]
        self.room_group_name = f"location_{self.user_id}"

        # Join a group unique to the user ID
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

    # Called when the WebSocket connection is closed
    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # Handles incoming JSON data and forwards it to the group
    async def receive(self, text_data):
        data = json.loads(text_data)
        latitude = data['latitude']
        longitude = data['longitude']

        # Broadcast the updated location to everyone in the group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'location_update',
                'latitude': latitude,
                'longitude': longitude,
                'user_id': self.user_id
            }
        )

    # Called when a location update is received for broadcasting
    async def location_update(self, event):
        await self.send(text_data=json.dumps({
            'user_id': event['user_id'],
            'latitude': event['latitude'],
            'longitude': event['longitude']
        }))
