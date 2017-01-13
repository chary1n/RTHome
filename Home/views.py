# -*- coding: utf-8 -*-
import json

from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from Home.forms import ProductForm, UserLoginForm
from Home.models import Product


def index(request):
    return render(request, 'index.html',{'products':Product.objects.all(),
                                                    })
def login(request):
    if request.method == 'POST':
        body = request.POST
        auth_user = authenticate(username=body['username'], password=body['password'])
        if auth_user is not None:
            return render(request, 'index.html')
        else:
            return HttpResponse(json.dumps({'msg':u'用戶或密碼不正確!'}))#render(request, '',{'msg':u'用戶或密碼不正確!'})

def tologin(request):
    return render(request, 'login.html')

def product_new(request):
    form = ProductForm()
    return render(request, 'Home/html/productNew.html', {'form':form})