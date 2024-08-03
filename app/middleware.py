from django.shortcuts import redirect
from django.urls import reverse


class RedirectIfNotAuthenticatedMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        # Agar foydalanuvchi tizimga kirgan bo'lsa, hech narsa qilmang
        if request.user.is_authenticated:
            return response

        # Agar foydalanuvchi tizimga kirmagan bo'lsa, register sahifasiga yo'naltiring
        if request.path not in [reverse('register'), reverse('login')]:
            return redirect(reverse('register'))

        return response
