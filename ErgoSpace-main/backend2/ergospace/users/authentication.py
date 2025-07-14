from rest_framework.authentication import TokenAuthentication 

class CustomTokenAuthentication(TokenAuthentication):
    def authenticate(self, request):
        token = request.COOKIES.get('Token')
        print(token)
        if not token:
            return None  # No token = no authentication
        return self.authenticate_credentials(token)