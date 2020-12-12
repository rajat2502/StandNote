from django.shortcuts import render
from rest_framework import generics
from .models import Notion
from .serializers import NotionSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from notion.client import NotionClient
from notion.block import TextBlock


class NotionList(generics.ListCreateAPIView):
    queryset = Notion.objects.all()
    serializer_class = NotionSerializer


class NotionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Notion.objects.all()
    serializer_class = NotionSerializer


class NotionByUser(generics.ListAPIView):
    model = Notion
    serializer_class = NotionSerializer
    lookup_field = 'email'

    def get_queryset(self):
        email = self.kwargs['email']
        return Notion.objects.filter(email=email)


# class NotionNote(generics.ListAPIView):
#     model = NotionNote
#     serializer_class = NotionSerializer
#     lookup_field = 'email'

#     def get_queryset(self):
#         email = self.kwargs['email']
#         return Notion.objects.filter(email=email)


class NotionNote(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        token = Notion.objects.get(email=email).token
        page = Notion.objects.get(email=email).page
        title = request.data.get('title')
        text = request.data.get('text')
        client = NotionClient(token_v2=token)
        page = client.get_block(page)
        page.title = title
        newchild = page.children.add_new(TextBlock, title=text)
        return Response(data="StandNote pushed to Notion Successfully!")
