from django.urls import path
from . import views

urlpatterns = [
    path('',views.WorkspaceLimitedListView.as_view(http_method_names=['get']),name='workspace-list'),
    path('new-workspace/',views.WorkspaceDetailedListCreateView.as_view(),name='workspace-create-list'),
    path('amenities/',views.WorkspaceFacilitiesGetView.as_view(),name='amenities-get'),
    path('<int:pk>/',views.WorkspaceDetailedRetriveView.as_view(),name='workspace-detailed')
]