from django.urls import path
from django.conf.urls import url

from . import views

urlpatterns = [
    path('', views.NotionList.as_view()),
    path('create/', views.NotionList.as_view()),
    path('<int:pk>/', views.NotionDetail.as_view()),
    # path('<email>/', views.NotionByUser.as_view()),
    url(r'^note/$', views.NotionNote.as_view(), name="notionbot"),
]
