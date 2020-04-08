from rest_framework import serializers
from .models import Email, Contact, RequestDemo

#local import here.


class EmailAPIViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = ['email']


class ContactAPIViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['email', 'phone', 'name', 'message']


class RequestDemoAPIViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestDemo
        fields = ['email', 'phone', 'name', 'message', 'enquiry_type']