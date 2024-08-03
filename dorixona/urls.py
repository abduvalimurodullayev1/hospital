from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls.i18n import i18n_patterns

urlpatterns = [
    path('admin/', admin.site.urls),  # Admin panel uchun URL
    path('i18n/', include('django.conf.urls.i18n')),  # Tilni o‘zgartirish URL'ini qo‘shish
] + i18n_patterns(
    path('', include('app.urls')),  # Tilga moslashgan URL'lar uchun app URLs
) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)  # Statik fayllar uchun URL
