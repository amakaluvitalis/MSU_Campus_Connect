from rest_framework import serializers
from .models import Location, Route

# Serializes all fields of the Location model
class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'

# Serializes all fields of the Route model
class RouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Route
        fields = '__all__'
