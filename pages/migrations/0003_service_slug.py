# Generated by Django 2.2 on 2020-04-28 18:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0002_auto_20200422_1439'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='slug',
            field=models.SlugField(blank=True, help_text='Leave it blank', max_length=60, null=True),
        ),
    ]