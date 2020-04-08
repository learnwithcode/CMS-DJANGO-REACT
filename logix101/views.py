from rest_framework.response import Response
from rest_framework.generics import (
    CreateAPIView, 
    )
from rest_framework import status

#Local Import her
from .serializers import (
    EmailAPIViewSerializer,
    ContactAPIViewSerializer,
    RequestDemoAPIViewSerializer
    )

from .models import Email, Contact, RequestDemo

'''
Email Create api view.
'''
class EmailCreateAPIView(CreateAPIView):
    queryset = Email.objects.all()
    serializer_class = EmailAPIViewSerializer

'''
Contact Create api view.
'''
class ContactCreateAPIView(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactAPIViewSerializer

'''
Demo Create api view.
'''
class RequestDemoCreateAPIView(CreateAPIView):
    queryset = RequestDemo.objects.all()
    serializer_class = RequestDemoAPIViewSerializer