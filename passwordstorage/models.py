from django.db import models
from django.contrib.auth import get_user_model

#  Модель user получаем из имеющейся в django стандартной модели user
#  Она польностью соответствует спроектированной
User = get_user_model()


#  Реализуем модель PasswordCell которая в которой опишем необходимые нам поля
class PasswordCell(models.Model):

    service = models.CharField(verbose_name="Название приложения",db_index=True, max_length=13)
    login = models.CharField(verbose_name="Используемый логин", max_length=128)
    user_password = models.CharField(verbose_name="Используемый пароль", max_length=2048)
    notes = models.TextField(verbose_name="Заметки")
    user = models.ForeignKey(User, verbose_name="Пользователь", on_delete=models.CASCADE)

