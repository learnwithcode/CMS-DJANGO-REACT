from django.db import models

# local import here

class EmailBase(models.Model):
    '''
    This model is used as abstract, only classes
    that inherit from this class can used this class attribute. 
    '''                                           
    email = models.EmailField(null=True, 
                                        blank=True, 
                                            help_text='Email Address')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)                                        

    class Meta:
        abstract = True

class ContactBase(models.Model):
    '''
    This model is used as abstract, only classes
    that inherit from this class can used this class attribute. 
    '''
    name = models.CharField(max_length=60, 
                                        null=True, 
                                            blank=True, 
                                                help_text='Full Name.')    
    phone = models.CharField(max_length=16, 
                                                        null=True, 
                                                            blank=True, 
                                                                help_text='Phone No.')   
    email = models.EmailField(null=True, 
                                        blank=True, 
                                            help_text='Email Address')                                                                                                    
    message = models.TextField(null=True, 
                                        blank=True, 
                                            help_text='Your Message.')                                                                                
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Contact(ContactBase):
    pass

    def __str__(self):
        return self.name        

class Email(EmailBase):
    pass

    def __str__(self):
        return self.email 

class RequestDemo(ContactBase):
    ENQUIRY_TYPE = (
        (1, ("WEB AND PORTAL DEVELOPMENT")),
        (2, ("DIGITAL AND SOCIAL MARKETING")),
        (3, ("ECOMMERCE STORES")),
        (4, ("MOBILE APPLICATION DEVELOPMENT")),
        (5, ("CONSULTING")),
        (6, ("ELEARNING")),
        (7, ("VIRTUAL CTO SERVICES")),
        (8, ("STARTUP MENTORING")),
        (9, ("SOFTWARE DEVELOPMENT")),
    )
    enquiry_type = models.IntegerField(choices=ENQUIRY_TYPE, 
                                                    default=1, 
                                                        blank=False, 
                                                            null=False,
                                                                help_text='Select a PORTAL Type')
    def __str__(self):
        return self.name 