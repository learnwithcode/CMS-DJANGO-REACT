from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView, 
    RetrieveAPIView
    )
from rest_framework import status

#Local Import her
from .serializers import (
    ServiceSerializer,
    ServiceDetailSerializer
    )

from .models import Service, SubService

'''
Service List api view.
'''
class ServiceListAPIView(ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

'''
Service Detail api view.
'''
class ServiceDetailAPIView(RetrieveAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceDetailSerializer