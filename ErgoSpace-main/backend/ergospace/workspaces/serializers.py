from rest_framework import serializers
from .models import Workspace,WorkspacePhotos,WorkspaceFacilities,WorkspaceCapacity
from users.serializers import UserSerializer
from users.models import User
import json

class WorkspacePhotosSerialzer(serializers.ModelSerializer):

    class Meta:
        model = WorkspacePhotos
        fields = '__all__'



class WorkspaceFacilitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkspaceFacilities
        fields = '__all__'

class WorkspaceCapacitySerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkspaceCapacity
        fields = '__all__'


class WorkspaceSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)
    images = WorkspacePhotosSerialzer(many=True,read_only=True)
    uploaded_images = serializers.ListField(
        child=serializers.ImageField(allow_empty_file=False,use_url=False),
        write_only=True
    )
    amenities = WorkspaceFacilitiesSerializer(many=True,read_only=True)

    capacity = WorkspaceCapacitySerializer(many=True,read_only=True)

    class Meta:
        model = Workspace
        fields = '__all__'
        read_only_fields = ['owner']

    def create(self, validated_data):
        uploaded_images = validated_data.pop('uploaded_images')
        validated_data['owner'] = self.context['request'].user
        amenities_data = validated_data.pop('amenities', [])
        capacity_data = self.initial_data.get('capacity')
        print("Validated Data:", validated_data)
        Workspaces = Workspace.objects.create(**validated_data)


        ''' this thing is done becoz we are also sending photos with the request so drf cant parse
        the json , so we are manually parsing the json for amenties'''
        amenities_data = self.initial_data.get('amenities')
        if isinstance(amenities_data, str):
            amenities_data = json.loads(amenities_data)
        elif not amenities_data:
            amenities_data = []

        '''this is to store the instances of amenties if it is not there'''

        amenity_instance = []
        for amenity in amenities_data:
            obj,created = WorkspaceFacilities.objects.get_or_create(name=amenity['name'])
            amenity_instance.append(obj)

        '''this  is  to set the amenities in the workspace'''

        Workspaces.amenities.set(amenity_instance)  # Set M2M data
        
        if isinstance(capacity_data,str):
            capacity_data = json.loads(capacity_data)
        elif not capacity_data:
            capacity_data = []

        print(capacity_data)

        for capacity in capacity_data:
            print(capacity)
            WorkspaceCapacity.objects.create(workspace=Workspaces,**capacity)
        


        for image in uploaded_images:
            WorkspacePhotos.objects.create(workspace=Workspaces, gallery=image)

        return Workspaces   


class WorkspaceLimitedDataSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)
    amenities = WorkspaceFacilitiesSerializer(many=True,required=False)

    class Meta:
        model = Workspace
        fields = [
            'name',
            'owner',
            'workspace_type',
            'description',
            'city',
            'latitude',
            'longitude',
            'logo',
            'amenities',
        ]

