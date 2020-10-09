from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import AvocadoList, get_random_smile

router = SimpleRouter()
router.register('avocado', AvocadoList)

app_name = 'avocado'

urlpatterns = [
    path('', include(router.urls)),
    path('random-smile/', get_random_smile),
]
