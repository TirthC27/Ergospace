from rest_framework import permissions

class IsProviderPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.user_type == 'customer':
            return False
        print(request.user.get_all_permissions())
        return super().has_permission(request, view)
    
class IsCustomerPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.user_type == 'provider':
            return False
        return super().has_permission(request, view)