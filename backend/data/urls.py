
from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import * 

router = DefaultRouter()
router.register('sales',SalesViewset, basename='sales')
router.register('regiondata',RegionDataViewset, basename='regiondata')
router.register('totalregiondata', TotalRegionDataViewset, basename='totalregiondata')
router.register('paymentmethoddata', PaymentMethodDataViewset, basename='paymentmethoddata')


urlpatterns = router.urls
