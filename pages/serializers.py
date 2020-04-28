from rest_framework import serializers
from .models import Service, SubService


#local import here.

class SubServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubService
        fields = ['id', 'title', 'description']

class ServiceSerializer(serializers.ModelSerializer):
    service = SubServiceSerializer(many=True)
    class Meta:
        model = Service
        fields = ['id', 'title', 'slug', 'description', 'service']


class ServiceDetailSerializer(serializers.ModelSerializer):
    service = SubServiceSerializer(many=True)
    class Meta:
        model = Service
        fields = ['id', 'title', 'description', 'service' ]        