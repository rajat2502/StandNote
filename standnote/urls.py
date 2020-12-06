from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from summarizer import views

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^summarizer/$', views.MyView.as_view(), name="summarizer")
]
