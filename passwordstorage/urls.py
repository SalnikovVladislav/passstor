from django.contrib import admin
from django.urls import path, include
from .views import *

app_name = "passcell"
urlpatterns = [
    path('passcell/create/', PassCellCreateView.as_view()),
    path('all/', PassCellListView.as_view()),
    path('passcell/detail/<int:pk>/', PassCellDetailView.as_view()),
]