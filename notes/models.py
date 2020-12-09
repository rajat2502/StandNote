from django.db import models
from django.contrib.auth.models import User
User._meta.get_field('email')._unique = True


class Note(models.Model):
    email = models.OneToOneField(
        User, on_delete=models.CASCADE, to_field='email')
    title = models.CharField(max_length=50)
    content = models.TextField(blank=True)
    markdown = models.TextField(blank=True)
    duration = models.CharField(blank=True, max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
