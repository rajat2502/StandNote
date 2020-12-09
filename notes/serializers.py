
from rest_framework import serializers
from . import models


class NoteSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'email', 'title', 'content', 'markdown', 'duration',
                  'created_at', 'updated_at',)
        model = models.Note
