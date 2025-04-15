from rest_framework import permissions

# Permission class to allow access only to alumni
class IsAlumni(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'alumni'

# Permission class to allow access only to event organizers
class IsEventOrganizer(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'event_organizer'

# Permission class to allow access only to admins
class IsAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'admin'
