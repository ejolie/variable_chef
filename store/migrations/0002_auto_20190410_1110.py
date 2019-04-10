# Generated by Django 2.2 on 2019-04-10 02:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cooking', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='variable',
            name='camel_case',
        ),
        migrations.RemoveField(
            model_name='variable',
            name='copy_hits',
        ),
        migrations.RemoveField(
            model_name='variable',
            name='pascal_case',
        ),
        migrations.RemoveField(
            model_name='variable',
            name='snake_case',
        ),
        migrations.AlterField(
            model_name='variable',
            name='name',
            field=models.TextField(unique=True),
        ),
        migrations.CreateModel(
            name='Case',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('type', models.TextField()),
                ('hits', models.IntegerField(default=0)),
                ('variable', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cooking.Variable')),
            ],
        ),
    ]