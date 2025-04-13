from rest_framework import serializers
from .models import Event

# Serializes the Event model and shows creator’s username as read-only
class EventSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source='creator.username')

    class Meta:
        model = Event
        fields = '__all__'
        read_only_fields = ['creator']
