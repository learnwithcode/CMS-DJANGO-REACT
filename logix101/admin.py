from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.sites.models import Site
from rest_framework.authtoken.models import Token
from allauth.account.models import EmailAddress
from allauth.socialaccount.models import SocialApp, SocialAccount, SocialToken

# local import here.
from .models import Contact, Email, RequestDemo

admin.site.site_header = '101logix'
admin.site.site_title = '101logix'
admin.site.index_title = 'site administration'

@admin.register(Email)
class EmailAdmin(admin.ModelAdmin):
    list_display = ['id', 'email', 'created', 'updated'] 
    list_filter = ['email']
    search_fields = ['email']
    date_hierarchy = 'created'

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'phone', 'email', 'created', 'updated'] 
    list_filter = ['email', 'phone', 'name']
    search_fields = ['email', 'name', 'phone']
    date_hierarchy = 'created'    

@admin.register(RequestDemo)
class RequestDemoAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'phone', 'email', 'created', 'updated'] 
    list_filter = ['email', 'phone', 'name']
    search_fields = ['email', 'name', 'phone']
    date_hierarchy = 'created'     


admin.site.unregister(Group) 
admin.site.unregister(Contact)   
admin.site.unregister(Email)
admin.site.unregister(RequestDemo)
admin.site.unregister(Site)
admin.site.unregister(Token)
admin.site.unregister(EmailAddress)
admin.site.unregister(SocialApp)
admin.site.unregister(SocialAccount)
admin.site.unregister(SocialToken)