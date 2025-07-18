from django.urls import path
from . import views

urlpatterns = [
    path('register/',views.UserRegisterView.as_view(),name='user-register'),
    path('login/',views.UserLoginView.as_view(),name='user-login'),
    path('logout/',views.UserLogoutView.as_view(),name='user-logout'),
]