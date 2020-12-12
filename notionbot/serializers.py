from rest_framework import serializers
from . import models


class NotionSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'email', 'token', 'page',
                  'team', 'created_at', 'updated_at')
        model = models.Notion

# class NotionNoteSerializer(serializers.ModelSerializer):

#     class Meta:
#         fields = '__all__'
#         model = models.NotionNote
#         depth = 1
