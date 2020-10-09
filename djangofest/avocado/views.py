import random

from rest_framework.decorators import api_view, permission_classes
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from .models import Avocado
from .serializers import AvocadoSerializer


class AvocadoList(GenericViewSet, ListModelMixin, RetrieveModelMixin):
    queryset = Avocado.objects.all()
    serializer_class = AvocadoSerializer
    permission_classes = [AllowAny]


@api_view(['GET', ])
@permission_classes([AllowAny])
def get_random_smile(request):
    random_smile = bool(random.getrandbits(1))

    return Response(
        {
            "smile": ":)" if random_smile else ":("
        }
    )
