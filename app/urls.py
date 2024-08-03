from django.urls import path
from app.view.wishlist import *
from app.views import *

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login_view, name='login'),
    path("", index, name="index"),
    path("about", about, name="about"),
    path("blog/", blog, name="blog"),
    path("blog_details/<int:pk>/", blog_details, name="blog-details"),
    path("shop", shop, name="shop"),
    path("contact", contact, name="contact"),
    path('wishlist/', wishlist_view, name='wishlist'),
    path('wishlist-add/<int:product_id>/', add_to_wishlist, name='add_to_wishlist'),
    path('wishlist/remove/<int:product_id>/', remove_from_wishlist, name='remove_from_wishlist'),

    path('cart/add/<int:product_id>/', add_to_cart, name='add_to_cart'),

    path('product_d/<int:pk>/', product_d, name='product_d'),
    path('related_product/<int:pk>/', related_products, name='related_products'),
    path("services", service, name="service"),
    path("services_details<int:pk>/", service_details, name="service_details"),
    path("portfolio", portfolio, name="portfolio"),
    path("portfolio-details", portfolio_details, name="portfolio-details"),
    path("locations", locations, name="locations"),
    path("account", account, name="account"),
    path("error_404_view", error_404_view, name="not_404"),
    path("team", team, name="team"),
    path("team_details/<int:pk>/", team_details, name="team_details"),
    path("checkout", checkout, name="checkout"),
    path('add/<int:product_id>/', add_to_cart, name='add_to_cart'),
    path('cart_views', view_cart, name='cart'),
    path('update/<int:item_id>/<int:quantity>/', update_cart_item, name='update_cart_item'),
    path('remove/<int:item_id>/', remove_cart_item, name='remove_cart_item'),
    path("order_complete/", order_complete, name="order_complete"),
    path("product_wishlist/", product_wishlist, name="wishlist_product"),

]

