from django.urls import path
from .import views

app_name = 'pages'

urlpatterns = [
    path('service/', views.ServiceListAPIView.as_view(), name='service_list'),
    path('service/<slug>/', views.ServiceDetailAPIView.as_view(), name='service_detail'),
    
]