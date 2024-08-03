# Dorixona Project

Dorixona — bu Django asosida ishlab chiqilgan va meditsina xizmatlarini taqdim etuvchi veb ilova. Ushbu loyiha Python 3.10 versiyasida ishlaydi.

## Loyihaning Maqsadi

Ushbu loyiha yordamida foydalanuvchilar sog'liqni saqlash xizmatlarini boshqarishi, COVID-19 vaksinatsiya kampaniyalarini ko'rishi, mahsulotlar va xizmatlar haqida ma'lumot olishi mumkin.

## Talablar

- Python 3.10
- Django
- boshqa kerakli kutubxonalar (requirements.txt faylida ro‘yxatlangan)

## O‘rnatish

1. **GitHub repozitoriyasini klonlash:**

    ```bash
    git clone https://github.com/abduvalimurodullayev1/hospital.git
    cd hospital
    ```

2. **Virtual muhit yaratish va faollashtirish:**

    ```bash
    python3.10 -m venv venv
    source venv/bin/activate  # Linux/MacOS
    venv\Scripts\activate  # Windows
    ```

3. **Kerakli kutubxonalarni o‘rnatish:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Ma'lumotlar bazasini yaratish va migratsiyalarni qo‘llash:**

    ```bash
    python manage.py migrate
    ```

5. **Superuser yaratish (admin panel uchun):**

    ```bash
    python manage.py createsuperuser
    ```

6. **Serverni ishga tushirish:**

    ```bash
    python manage.py runserver
    ```

7. **Brauzerda ilovangizga kirish:**

    Brauzerda `http://localhost:8000/` manzilini oching.

## Foydalanish

- Admin panelga kirish uchun `http://localhost:8000/admin/` manzilidan foydalaning.
- Tilni o'zgartirish uchun URL parametrlaridan foydalaning, masalan, `http://localhost:8000/uz/` yoki `http://localhost:8000/ru/`.

## Mualliflar

- **Abduvali Murodullayev** - [GitHub Profil](https://github.com/abduvalimurodullayev1)

## Lisensiya

Ushbu loyiha [MIT lisensiyasi](https://opensource.org/licenses/MIT) bilan tarqatiladi.

## Qo‘llab-quvvatlash

Agar sizda biron bir savol yoki muammo bo‘lsa, iltimos, GitHub Issues bo‘limida masalalarni qayd eting yoki [menga murojaat qiling](murodullayevabduvali972@gmail.com).
