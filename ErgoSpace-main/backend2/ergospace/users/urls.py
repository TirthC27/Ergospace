from django.urls import path
from . import views

urlpatterns = [
    path('register/',views.UserRegisterView.as_view(),name='user-register'),
    path('login/',views.UserLoginView.as_view(),name='user-login'),
    path('logout/',views.UserLogoutView.as_view(),name='user-logout'),
    path('profile/',views.UserProfileView.as_view(),name='user-profile'),
    path('profile/update/',views.UserProfileUpdateView.as_view(),name='user-update'),
]