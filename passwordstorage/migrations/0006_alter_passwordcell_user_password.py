# Generated by Django 4.0.3 on 2022-05-18 16:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('passwordstorage', '0005_alter_passwordcell_user_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='passwordcell',
            name='user_password',
            field=models.CharField(max_length=2048, verbose_name='Используемый пароль'),
        ),
    ]
