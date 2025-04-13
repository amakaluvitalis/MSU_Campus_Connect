from rest_framework import viewsets, permissions
from .models import Location, Route
from .serializers import LocationSerializer, RouteSerializer

# Handles CRUD operations for Location model
class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    permission_classes = [permissions.IsAuthenticated]

# Handles CRUD operations for Route model
class RouteViewSet(viewsets.ModelViewSet):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer
    permission_classes = [permissions.IsAuthenticated]
