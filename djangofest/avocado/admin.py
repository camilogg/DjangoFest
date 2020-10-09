from django.contrib import admin
from django.contrib.postgres.fields import JSONField
from import_export.admin import ImportExportModelAdmin

from prettyjson import PrettyJSONWidget

from .models import Avocado


@admin.register(Avocado)
class AvocadoAdmin(ImportExportModelAdmin):
    list_display = ('name', 'sku', 'price')
    list_display_links = list_display

    formfield_overrides = {
        JSONField: {'widget': PrettyJSONWidget}
    }
