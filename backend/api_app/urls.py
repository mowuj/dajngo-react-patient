
from django.urls import path, include
from rest_framework import routers
from api_app.views import *

router=routers.DefaultRouter()
router.register(r'patient',PatientViewSet)

urlpatterns = [
    
    path('', include(router.urls)),
]
