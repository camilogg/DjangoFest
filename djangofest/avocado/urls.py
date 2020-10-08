from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import AvocadoList

router = SimpleRouter()
router.register('avocado', AvocadoList)

app_name = 'avocado'

urlpatterns = [
    path('', include(router.urls)),
]
