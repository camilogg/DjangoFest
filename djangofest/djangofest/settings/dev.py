from .base import *

DEBUG = True

CORS_ORIGIN_ALLOW_ALL = True

ALLOWED_HOSTS = ['*']

STATIC_ROOT = BASE_DIR / 'static'
STATIC_URL = '/static/'
MEDIA_ROOT = BASE_DIR / 'media'
MEDIA_URL = '/media/'

CELERY_BROKER_URL = f'redis://{os.environ["REDIS_HOST"]}:{os.environ["REDIS_PORT"]}'
CELERY_RESULT_BACKEND = CELERY_BROKER_URL
