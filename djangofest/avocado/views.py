from rest_framework.mixins import ListModelMixin
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import GenericViewSet

from .models import Avocado
from .serializers import AvocadoSerializer


class AvocadoList(GenericViewSet, ListModelMixin):
    queryset = Avocado.objects.all()
    serializer_class = AvocadoSerializer
    permission_classes = [AllowAny]
