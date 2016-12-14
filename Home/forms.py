# -*- coding: utf-8 -*-
from django import forms
from django.forms import fields

from .models import Product

class ProductForm(forms.ModelForm):

    class Meta:
        model = Product
        fields = ('name','easy_level')


class UserLoginForm(forms.Form):
    username = fields.CharField(label=u'用户名', max_length=100)
    password = fields.CharField(label=u'密码',max_length=25)
