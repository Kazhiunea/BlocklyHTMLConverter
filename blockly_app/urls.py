from django.urls import path
from . import views

app_name = 'blockly_app'

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('workspace/', views.workspace, name='workspace'),
    path('homepage/', views.homepage, name='homepage'),
    path('generated_page/', views.generated_page, name='generated_page'),
    path('html_generator/', views.html_generator, name='html_generator'),
    path('test_page/', views.test_page, name='test_page'),
]