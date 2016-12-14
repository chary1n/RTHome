from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.shortcuts import render

# Create your views here.
from Home.forms import ProductForm, UserLoginForm
from Home.models import Product


def index(request):
    return render(request, 'index.html',{'products':Product.objects.all(),
                                                    })
def login(request):
    if request.method == 'POST':
        user = request.user
        auth_user = authenticate(username=user.username, password=user.password)
        if auth_user is not None:
            return render(request, 'form.html',{'msg':True})
        else:
            return render(request, 'form.html',{'msg':False})



def product_new(request):
    form = ProductForm()
    return render(request, 'Home/html/productNew.html', {'form':form})