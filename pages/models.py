from django.db import models
from django.template.defaultfilters import slugify

# Create your models here.


class ContentBase(models.Model):
    title = models.CharField(max_length=60, 
                                        null=True, 
                                            blank=True, 
                                                help_text='give it a name.')                                            
    description = models.TextField(null=True, 
                                        blank=True, 
                                            help_text='Description for title.')  

    image = models.ImageField(null=True, 
                                    blank=True, 
                                        help_text='Image for the title.') 
    active = models.BooleanField(default=True)                                                                            


    class Meta:
        abstract = True     


class Service(ContentBase):
    slug = models.SlugField(max_length=60, null=True, blank=True, help_text='Leave it blank')


    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Service, self).save(*args, **kwargs)

class SubService(ContentBase):
    service = models.ForeignKey(Service, 
                                        null=True, 
                                            blank=True, 
                                                on_delete=models.CASCADE,
                                                    related_name='service')

                                              