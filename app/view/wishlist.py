from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404, redirect

from app.models import Wishlist, Product


@login_required
def wishlist_view(request):
    try:
        wishlist = request.user.wishlist
    except Wishlist.DoesNotExist:
        wishlist = Wishlist.objects.create(user=request.user)

    return render(request, 'wishlist.html', {'wishlist': wishlist})


@login_required
def add_to_wishlist(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    wishlist, created = Wishlist.objects.get_or_create(user=request.user)

    if product not in wishlist.products.all():
        wishlist.products.add(product)

    return redirect('wishlist')


@login_required
def remove_from_wishlist(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    wishlist = request.user.wishlist
    wishlist.products.remove(product)

    return redirect('wishlist')
