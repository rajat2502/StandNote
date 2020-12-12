from django.db import models
# from summarizer.views import SummariserCosine
from django.contrib.auth.models import User
User._meta.get_field('email')._unique = True


class Notion(models.Model):
    email = models.ForeignKey(
        User, on_delete=models.CASCADE, to_field='email')
    token = models.TextField()
    page = models.URLField()
    team = models.CharField(max_length=50, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.email


# class NotionNote(models.Model):
#     email = models.ForeignKey(
#         User, on_delete=models.CASCADE, to_field='email')
#     title = models.TextField()
#     text = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
