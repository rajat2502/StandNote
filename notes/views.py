from django.shortcuts import render
from rest_framework import generics
import django_filters.rest_framework
from django.shortcuts import get_object_or_404, get_list_or_404
from .models import Note
from .serializers import NoteSerializer
from rest_framework.response import Response


class NoteList(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]


class NoteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]


class NoteByUser(generics.ListAPIView):
    model = Note
    serializer_class = NoteSerializer
    lookup_field = 'email'

    def get_queryset(self):
        email = self.kwargs['email']
        return Note.objects.filter(email=email)
