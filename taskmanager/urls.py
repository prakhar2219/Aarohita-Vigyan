from django.contrib import admin
from django.urls import path, include
from tasks.views import TaskViewSet

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('tasks.urls')),
     path('', TaskViewSet.as_view({'get': 'list'}), name='home'),
]
