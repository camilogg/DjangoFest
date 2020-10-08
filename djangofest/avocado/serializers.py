from rest_framework.serializers import ModelSerializer

from .models import Avocado


class AvocadoSerializer(ModelSerializer):

    class Meta:
        model = Avocado
        fields = '__all__'
