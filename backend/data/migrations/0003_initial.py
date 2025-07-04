# Generated by Django 5.2.3 on 2025-06-11 21:10

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('data', '0002_remove_sales_brand_remove_sales_country_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='PaymentMethod',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='ProductCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='ProductName',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Region',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Sales',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price_each', models.DecimalField(decimal_places=2, max_digits=10)),
                ('total_revenue', models.DecimalField(decimal_places=2, max_digits=10)),
                ('quantity', models.IntegerField()),
                ('date', models.DateField()),
                ('paymentmethod', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='data.paymentmethod')),
                ('productcategory', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='data.productcategory')),
                ('productname', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='data.productname')),
                ('region', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='data.region')),
            ],
        ),
    ]
