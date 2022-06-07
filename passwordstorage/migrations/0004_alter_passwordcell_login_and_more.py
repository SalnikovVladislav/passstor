# Generated by Django 4.0.3 on 2022-05-18 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('passwordstorage', '0003_alter_passwordcell_service_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='passwordcell',
            name='login',
            field=models.CharField(max_length=128, verbose_name='Используемый логин'),
        ),
        migrations.AlterField(
            model_name='passwordcell',
            name='user_password',
            field=models.CharField(max_length=512, verbose_name='Используемый пароль'),
        ),
    ]