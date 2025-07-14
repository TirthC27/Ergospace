from django.shortcuts import render
from rest_framework import generics
from .models import Workspace,WorkspaceFacilities
from .serializers import WorkspaceSerializer,WorkspaceFacilitiesSerializer,WorkspaceLimitedDataSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from users.permissions import IsProviderPermission
from rest_framework.permissions import IsAuthenticated

# Create your views here.

'''this api view will give list of amenties and will create amenties'''
class WorkspaceDetailedListCreateView(generics.ListCreateAPIView):
    queryset = Workspace.objects.all()
    parser_class = [MultiPartParser, FormParser]
    serializer_class = WorkspaceSerializer
    permission_classes = [IsAuthenticated,IsProviderPermission]

    def get_queryset(self,*args,**kwargs):
        qs =  super().get_queryset(*args,**kwargs)
        request = self.request
        user = request.user
        print(request.user)
        if user.user_type == 'provider':
            return qs.filter(owner=user)
        return qs
    



'''this api view is to retrive data of a single instance of workspace'''
class WorkspaceDetailedRetriveView(generics.RetrieveAPIView):
    queryset = Workspace.objects.all()
    serializer_class = WorkspaceSerializer

    def get_queryset(self,*args,**kwargs):
        qs =  super().get_queryset(*args,**kwargs)
        request = self.request
        user = request.user
        print(request.user)
        if user.user_type == 'provider':
            return qs.filter(owner=user)
        return qs


class WorkspaceLimitedListView(generics.ListAPIView):
    queryset = Workspace.objects.all()
    serializer_class = WorkspaceLimitedDataSerializer

    def get_queryset(self,*args,**kwargs):
        qs =  super().get_queryset(*args,**kwargs)
        request = self.request
        user = request.user
        print(request.user)
        if user.user_type == 'provider':
            return qs.filter(owner=user)
        return qs


'''this api view will give list of amenities'''
class WorkspaceFacilitiesGetView(generics.ListAPIView):
    queryset = WorkspaceFacilities.objects.all()
    serializer_class = WorkspaceFacilitiesSerializer