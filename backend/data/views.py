from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import * 
from .models import * 
from rest_framework.response import Response
from django.db.models import Sum, F, Func, Value, FloatField, IntegerField, Case, When


class SalesViewset(viewsets.ViewSet): 
    permission_classes = [permissions.AllowAny]
    queryset = Sales.objects.all()
    serializer_class = SalesSerializer

    def list(self, request): 
        queryset = Sales.objects.all()
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