from django.db import models

# Stores data about a physical or logical point (e.g., building, gate, block)
class Location(models.Model):
    name = models.CharField(max_length=100)
    latitude = models.FloatField()
    longitude = models.FloatField()
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

# Stores a route between two locations including estimated time and directions
class Route(models.Model):
    start = models.ForeignKey(Location, related_name='routes_from', on_delete=models.CASCADE)
    end = models.ForeignKey(Location, related_name='routes_to', on_delete=models.CASCADE)
    estimated_time = models.DurationField()
    directions = models.TextField(help_text="Step-by-step directions")

    def __str__(self):
        return f"{self.start.name} ➡️ {self.end.name}"
