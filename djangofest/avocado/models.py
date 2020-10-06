import uuid

from django.contrib.postgres.fields import JSONField
from django.db import models

# Create your models here.


class Avocado(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=254)
    sku = models.CharField(max_length=16)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='avocados/', max_length=1024)
    attributes = JSONField()

    class Meta:
        verbose_name = "Avocado"
        verbose_name_plural = "Avocados"

    def __str__(self):
        return self.name
