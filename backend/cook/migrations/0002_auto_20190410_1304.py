# Generated by Django 2.2 on 2019-04-10 04:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cook', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='short',
            field=models.CharField(blank=True, default=None, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='slice',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='sound',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='wrong',
            field=models.CharField(blank=True, default=None, max_length=50, null=True),
        ),
    ]
