from django.db import models

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


    class Meta:
        abstract = True     


class Service(ContentBase):
    pass



class SubService(ContentBase):
    service = models.ForeignKey(Service, 
                                        null=True, 
                                            blank=True, 
                                                on_delete=models.CASCADE,
                                                    related_name='service')

                                              