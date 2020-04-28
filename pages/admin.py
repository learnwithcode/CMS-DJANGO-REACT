from django.contrib import admin

# local import here.
from .models import Service, SubService

class SubServiceInLine(admin.TabularInline):
    model = SubService
    extra = 1


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'active'] 
    list_filter = ['title', 'active']
    search_fields = ['title']
    readonly_fields = ['slug']
    inlines = [
        SubServiceInLine,
    ]


