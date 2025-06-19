from django.db import models

# Create your models here.

class Region(models.Model):
    name = models.CharField(max_length=500)

class ProductName(models.Model):
    name = models.CharField(max_length=500)
    

class ProductCategory(models.Model):
    name = models.CharField(max_length=500)

class PaymentMethod(models.Model):
    name = models.CharField(max_length=500)






class Sales(models.Model):
    price_each = models.DecimalField(max_digits=10, decimal_places=2)
    total_revenue = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    date = models.DateField()

    
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    productname = models.ForeignKey(ProductName, on_delete=models.CASCADE)
    productcategory = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
    paymentmethod = models.ForeignKey(PaymentMethod, on_delete=models.CASCADE)
