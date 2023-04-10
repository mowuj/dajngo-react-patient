from django.shortcuts import render
from rest_framework import viewsets
from api_app.models import *
from api_app.serializers import *
# Create your views here.
class PatientViewSet(viewsets.ModelViewSet):
    queryset=Patient.objects.all()
    serializer_class=PatientSerializer