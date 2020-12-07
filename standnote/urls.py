from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from summarizer import views
from social_login.views import FacebookLogin, GoogleLogin

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^summarizer/$', views.MyView.as_view(), name="summarizer"),
    path('rest-auth/facebook/', FacebookLogin.as_view()),
    path('rest-auth/google/', GoogleLogin.as_view())
]
