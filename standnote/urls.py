from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from summarizer import views
from social_login.views import FacebookLogin, GoogleLogin
from allauth.account.views import confirm_email
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^summarizer/$', views.MyView.as_view(), name="summarizer"),
    path('rest-auth/facebook/', FacebookLogin.as_view(), name='fb_login'),
    path('rest-auth/google/', GoogleLogin.as_view(), name='google_login'),
    url(r'^accounts/', include('allauth.urls'), name='socialaccount_signup'),
    url(r"^rest-auth/registration/account-confirm-email/(?P<key>[\s\d\w().+-_',:&]+)/$", confirm_email,
        name="account_confirm_email"),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    path('notes/', include('notes.urls')),
    path('notion/', include('notionbot.urls')),

]
