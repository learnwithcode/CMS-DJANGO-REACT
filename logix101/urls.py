from django.urls import path
from .import views

app_name = 'logix101'

urlpatterns = [
    path('email/', views.EmailCreateAPIView.as_view(), name='email_create_view'),
    path('contact/', views.ContactCreateAPIView.as_view(), name='contact_create_view'),
    path('demo/', views.RequestDemoCreateAPIView.as_view(), name='demo_create_view'),
    
]