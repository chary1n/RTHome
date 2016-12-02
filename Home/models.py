from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Product(models.Model):

    name = models.CharField(max_length=256, default='',)
    product_model_name = models.CharField(default='', max_length=256)
    number_of_parts = models.IntegerField(default=0)
    size_long = models.FloatField(default=0)
    size_width = models.FloatField(default=0)
    size_height = models.FloatField(default=0)
    easy_level = models.IntegerField(default=0)
    product_image_url = models.CharField(max_length=256, blank=True)

    def __str__(self):
        return self.name