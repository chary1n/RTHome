from django.shortcuts import render

# Create your views here.
from Home.forms import ProductForm
from Home.models import Product


def index(request):

    return render(request, 'index.html',{'products':Product.objects.all(),
                                                    })

def product_new(request):
    form = ProductForm()
    return render(request, 'Home/html/productNew.html', {'form':form})