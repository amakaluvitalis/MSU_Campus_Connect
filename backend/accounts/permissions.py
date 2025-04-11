from rest_framework import permissions

class IsAlumni(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'alumni'

class IsEventOrganizer(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'event_organizer'

class IsAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'admin'
