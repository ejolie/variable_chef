# Generated by Django 2.2 on 2019-04-11 01:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='variable',
            name='hits',
            field=models.IntegerField(default=0),
        ),
    ]
