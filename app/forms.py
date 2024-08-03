from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.forms import ModelForm
from .models import Comment, Product, Wishlist, ContactMessage, ServiceContact, ShippingAddress, Order
from django.contrib.auth.models import User


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('name', 'email', 'body')


class WishlistForm(forms.ModelForm):
    product_ids = forms.ModelMultipleChoiceField(queryset=Product.objects.all(), widget=forms.CheckboxSelectMultiple,
                                                 required=True)

    class Meta:
        model = Wishlist
        fields = ['product_ids']


class ContactForm(ModelForm):
    class Meta:
        model = ContactMessage
        exclude = ()


class ContactService(ModelForm):
    class Meta:
        model = ServiceContact
        exclude = ()


class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(required=True)
    consent_to_marketing = forms.BooleanField(required=False)
    consent_to_privacy_policy = forms.BooleanField(required=False)

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2', 'consent_to_marketing', 'consent_to_privacy_policy']
        widgets = {
            'password1': forms.PasswordInput(),
            'password2': forms.PasswordInput(),
        }


class ShippingAddressForm(forms.ModelForm):
    class Meta:
        model = ShippingAddress
        fields = ['address', 'city', 'state', 'zipcode']


class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = []
