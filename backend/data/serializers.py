from rest_framework import serializers
from .models import *
import calendar

class SalesSerializer(serializers.ModelSerializer): 
    
    region = serializers.SlugRelatedField(
        queryset=Region.objects.all(), 
        slug_field='name'
    )

    productname = serializers.SlugRelatedField(
        queryset=ProductName.objects.all(), 
        slug_field='name'
    )

    productcategory = serializers.SlugRelatedField(
        queryset=ProductCategory.objects.all(), 
        slug_field='name'
    )

    paymentmethod = serializers.SlugRelatedField(
        queryset=PaymentMethod.objects.all(), 
        slug_field='name'
    )

    class Meta: 
        model = Sales
        fields = ('id', 'price_each', 'total_revenue', 'quantity', 'date', 'region', 'productname', 'productcategory', 'paymentmethod')



class RegionDataSerializer(serializers.Serializer):
    date__month = serializers.CharField()
    quantityNorthAmerica = serializers.IntegerField()
    quantityEurope = serializers.IntegerField()
    quantityAsia = serializers.IntegerField()
    month_name = serializers.SerializerMethodField()

    def get_month_name(self,obj):
        return calendar.month_name[obj['date__month']]

class TotalRegionDataSerializer(serializers.Serializer):
    id = serializers.IntegerField(source='region')
    label = serializers.CharField(source='region__name')
    value = serializers.IntegerField(source='quantity')
    percentage = serializers.DecimalField(max_digits=10, decimal_places=2)


class PaymentMethodDataSerializer(serializers.Serializer):
    id = serializers.IntegerField(source='paymentmethod')
    label = serializers.CharField(source='paymentmethod__name')
    value = serializers.IntegerField(source='quantity')


class ProductRegionDataSerializer(serializers.Serializer):
   productcategory__name = serializers.CharField()
   quantityRegionNorthAmerica = serializers.IntegerField()
   quantityRegionEurope = serializers.IntegerField()
   quantityRegionAsia = serializers.IntegerField()
