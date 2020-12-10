from django.shortcuts import render
from rest_framework import generics

from .models import Note
from .serializers import NoteSerializer


class NoteList(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer


class NoteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer


class NoteByUser(generics.RetrieveAPIView):
    lookup_url_kwarg = "email"
    serializer_class = NoteSerializer

    def get_queryset(self):
        email = self.request.query_params.get('email', None)
        return Note.objects.filter(email=email)
