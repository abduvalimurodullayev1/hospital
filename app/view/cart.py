# views.py
from django.shortcuts import get_object_or_404, redirect, render
from django.contrib.auth.decorators import login_required
from app.models import Cart, CartItem
from app.models import Product


@login_required(login_url='login')
def add_shopping_view(request, product_id):
    product = get_object_or_404(klass=Product, pk=product_id)

    # quantity = request.POST['quantity']
    shopping, created = CartItem.objects.get_or_create(user=request.user)
    # shopping.quantity = quantity
    shopping.product.add(product)
    return redirect('cart')


@login_required(login_url='login')
def shopping_cart_view(request):
    user = request.user  # Agar foydalanuvchilar uchun autentifikatsiya muvaffaqiyatli bo'lsa

    try:
        shopping_cart = CartItem.objects.filter(user=user).first()
        products = shopping_cart.product.all()
    except CartItem.DoesNotExist:
        products = []

    return render(request=request,
                  template_name='cart.html',
                  context={'products': products})


def delete_shopping_view(request, product_id):
    user = request.user  # Agar foydalanuvchilar uchun autentifikatsiya muvaffaqiyatli bo'lsa

    try:
        shopping_cart = CartItem.objects.filter(user=user).first()
        product = Product.objects.get(pk=product_id)
        shopping_cart.product.remove(product)
    except (CartItem.DoesNotExist, Product.DoesNotExist):
        pass

    return redirect('shopping-cart')
