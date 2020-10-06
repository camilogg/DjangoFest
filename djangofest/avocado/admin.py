from django.contrib import admin
from django.contrib.postgres.fields import JSONField

from prettyjson import PrettyJSONWidget

from .models import Avocado


@admin.register(Avocado)
class AvocadoAdmin(admin.ModelAdmin):
    list_display = ('name', 'sku', 'price')
    list_display_links = list_display

    formfield_overrides = {
        JSONField: {'widget': PrettyJSONWidget}
    }
