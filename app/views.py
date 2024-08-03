from django.contrib import messages
from django.contrib.auth import authenticate
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib import messages
from django.http import HttpResponseServerError, Http404, HttpResponse
from django.shortcuts import render, get_object_or_404, redirect
import logging
from django.contrib.auth import authenticate, login as auth_login

from dorixona import settings

logger = logging.getLogger(__name__)
from app.forms import CommentForm, ContactForm, ContactService, CustomUserCreationForm, ShippingAddressForm, OrderForm
from app.models import *


def index(request):
    product = Product.objects.all()
    blogs = BlogPost.objects.all()
    context = {
        "products": product,
        "blog": blogs
    }
    return render(request, 'index.html', context)


def about(request):
    teams = Team.objects.all()
    services = Service.objects.all()
    blogs = BlogPost.objects.all()
    context = {
        "blogs": blogs,
        "team": teams,
        "service_1": services
    }
    return render(request, 'about.html', context)


def blog(request):
    blogs = BlogPost.objects.all()
    context = {
        "blog": blogs
    }
    return render(request, 'blog.html', context)


def blog_details(request, pk):
    blogs = get_object_or_404(BlogPost, pk=pk)
    comments = blogs.comments.filter(active=True)
    new_comment = None

    if request.method == 'POST':
        comment_form = CommentForm(data=request.POST)
        if comment_form.is_valid():
            new_comment = comment_form.save(commit=False)
            new_comment.blog = blogs
            new_comment.save()
    else:
        comment_form = CommentForm()

    context = {
        'blog': blogs,
        'comments': comments,
        'new_comment': new_comment,
        'comment_form': comment_form,
    }
    return render(request, 'blog-details.html', context)


def shop(request):
    products = Product.objects.all()
    context = {
        'products': products,
    }
    return render(request, 'shop.html', context)


@login_required
def product_d(request, pk):
    product = get_object_or_404(Product, pk=pk)
    related_product = RelatedProducts.objects.all()

    # Istaklar ro'yxatiga mahsulot qo'shish
    if request.method == 'POST' and 'add_to_wishlist' in request.POST:
        wishlist, created = Wishlist.objects.get_or_create(user=request.user)
        if product not in wishlist.products.all():
            wishlist.products.add(product)
        return redirect('wishlist')

    context = {
        "related": related_product,
        'product': product
    }

    return render(request, 'product-details.html', context)


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = ContactForm()

    return render(request, 'contact.html', {'form': form})


def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            return redirect('login')  # Ro‘yxatdan o‘tgan foydalanuvchini kerakli sahifaga yo‘naltirish
    else:
        form = CustomUserCreationForm()

    return render(request, 'register.html', {'form': form})


def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            auth_login(request, user)  # Foydalanuvchini tizimga kirish
            messages.success(request, 'You have successfully logged in.')
            return redirect('index')  # Kirgandan so‘ng foydalanuvchini yo‘naltirish
        else:
            messages.error(request, 'Invalid username or password.')
    else:
        form = AuthenticationForm()

    return render(request, 'login.html', {'form': form})


def service(request):
    services = Service.objects.all()
    blogs = BlogPost.objects.all()
    context = {
        "blog": blogs,
        "service": services
    }
    return render(request, 'service.html', context)


def service_details(request, pk):
    services = get_object_or_404(Service, pk=pk)
    context = {
        "service": services
    }
    return render(request, 'service-details.html', context)


def portfolio(request):
    return render(request, 'portfolio.html')


def portfolio_details(request):
    return render(request, 'portfolio-details.html')


def locations(request):
    return render(request, 'locations.html')


def account(request):
    return render(request, 'account.html')


def team(request):
    teams = Team.objects.all()
    context = {
        "team": teams
    }
    return render(request, 'team.html', context)


def team_details(request, pk):
    teams = get_object_or_404(Team, pk=pk)

    if request.method == 'POST':
        form = ContactService(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
        else:
            print(form.errors)
    else:
        form = ContactService()

    services = Service.objects.all()
    context = {
        'form': form,
        'services': services,
        "team": teams
    }
    return render(request, 'team-details.html', context)


def cart(request):
    return render(request, 'cart.html')


def not_404(request, exception):
    return render(request, '404.html', {}, exception.status)


def related_products(request, pk):
    product = get_object_or_404(RelatedProducts, pk=pk)
    context = {
        'product': product
    }
    return render(request, 'related_products.html', context)


def contact_service(request):
    if request.method == 'POST':
        form = ContactService(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')  # Redirect to a success page
    else:
        form = ContactService()

    services = Service.objects.all()
    context = {
        'form': form,
        'services': services
    }
    return render(request, 'team-details.html', context)


@login_required
def add_to_cart(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    cart, created = Cart.objects.get_or_create(user=request.user)
    cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)
    if not created:
        cart_item.quantity += 1
    cart_item.save()
    return redirect('view_cart')


@login_required
def view_cart(request):
    cart, created = Cart.objects.get_or_create(user=request.user)
    return render(request, 'cart.html', {'cart': cart})


def update_cart_item(request, item_id, quantity):
    item = get_object_or_404(CartItem, id=item_id)
    item.quantity = quantity
    item.save()
    return redirect('cart')  # Cart sahifasiga qaytish


@login_required
def remove_cart_item(request, item_id):
    cart_item = get_object_or_404(CartItem, id=item_id, cart__user=request.user)
    cart_item.delete()
    return redirect('view_cart')


def checkout(request):
    if request.method == 'POST':
        address_form = ShippingAddressForm(request.POST)
        order_form = OrderForm(request.POST)
        if address_form.is_valid() and order_form.is_valid():
            order = order_form.save(commit=False)
            order.user = request.user
            order.save()
            address = address_form.save(commit=False)
            address.user = request.user
            address.order = order
            address.save()
            cart = Cart.objects.get(user=request.user)
            for item in cart.items.all():
                OrderItem.objects.create(
                    order=order,
                    product=item.product,
                    quantity=item.quantity,
                    price=item.product.price
                )
            cart.items.all().delete()  # Clear the cart
            return redirect('order_complete')
    else:
        address_form = ShippingAddressForm()
        order_form = OrderForm()

    context = {
        'address_form': address_form,
        'order_form': order_form,
    }
    return render(request, 'checkout.html', context)


def order_complete(request):
    return render(request, "order_complete.html")


def product_wishlist(request):
    product = Product.objects.all()
    context = {
        "product_sss": product
    }
    return render(request, 'product-details.html', context)


@login_required
def cart_detail(request):
    carts = get_object_or_404(Cart, user=request.user)
    total_price = carts.get_total_price()
    return render(request, 'cart.html', {'cart': cart, 'total_price': total_price})


def error_404_view(request):
    data = {"name": "ThePythonDjango.com"}
    return render(request, '404.html', data)

