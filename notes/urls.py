from django.urls import path
from django.conf.urls import url

from . import views

urlpatterns = [
    path('', views.NoteList.as_view()),
    path('create/', views.NoteList.as_view()),
    path('<int:pk>/', views.NoteDetail.as_view()),
    url(r'^(?P<email>.+)/$', views.NoteByUser.as_view())
]
