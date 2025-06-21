from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import * 
from .models import * 
from rest_framework.response import Response
from django.db.models import Sum, F, Func, Value, FloatField, IntegerField, Case, When
from django.db.models.functions import Cast


class SalesViewset(viewsets.ViewSet): 
    permission_classes = [permissions.AllowAny]
    queryset = Sales.objects.all()
    serializer_class = SalesSerializer

    def list(self, request): 
        queryset = Sales.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

class TotalRegionDataViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Sales.objects.all()
    serializer_class = TotalRegionDataSerializer

    def list(self, request):
        total_sum = Sales.objects.aggregate(total_quantity=Sum('quantity'))
        total_quantity_value = total_sum['total_quantity']

        queryset = Sales.objects.values('region', 'region__name')\
            .annotate(quantity=Sum('quantity'))\
            .annotate(percentage=Func(
            (Cast(F('quantity'), FloatField()) / total_quantity_value) * 100,
                        Value(2),
                        function='ROUND',
                        output_field=FloatField()
                    ))

        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

class RegionDataViewset(viewsets.ViewSet): 
    permission_classes = [permissions.AllowAny]
    queryset = Sales.objects.all()
    serializer_class = RegionDataSerializer

    def list(self, request): 
        queryset = Sales.objects.values('date__month')\
                   .annotate(quantityNorthAmerica=Sum(
                       Case(
                           When(region__name="North America", then='quantity'),
                           default=0, 
                           output_field=IntegerField()
                       )
                   ))\
                   .annotate(quantityEurope=Sum(
                       Case(
                           When(region__name="Europe", then='quantity'),
                           default=0, 
                           output_field=IntegerField()
                       )
                   ))\
                   .annotate(quantityAsia=Sum(
                       Case(
                           When(region__name="Asia", then='quantity'),
                           default=0, 
                           output_field=IntegerField()
                       )
                   ))
        
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

class PaymentMethodDataViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Sales.objects.all()
    serializer_class = PaymentMethodDataSerializer

    def list(self, request):

        queryset = Sales.objects.values('paymentmethod', 'paymentmethod__name') \
                .annotate(quantity=Sum('quantity'))

        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)