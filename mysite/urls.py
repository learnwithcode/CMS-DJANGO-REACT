"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
# API DOCS
from rest_framework_swagger.views import get_swagger_view
from rest_framework.documentation import include_docs_urls
schema_view = get_swagger_view(title='API DOCS')

urlpatterns = [
    path('grappelli/', include('grappelli.urls')), # grappelli URLS
    path('admin/', admin.site.urls),
    path('api-docs/', schema_view),
    path('docs/', include_docs_urls(title='API DOCS')),
    #rest auth
    # path('rest-auth/', include('rest_auth.urls')),
    #all auth
    path('accounts/', include('allauth.urls')),
    #logix101
    # path('logix/api/', include('logix101.urls', namespace='logix101')),
    #DRF
    path('api-auth/', include('rest_framework.urls')),
    #React urls
    
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
]


urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 