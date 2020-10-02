migrate:
	docker-compose exec api ./manage.py makemigrations
	docker-compose exec api ./manage.py migrate

requirements:
	docker-compose exec api pip install -r requirements.txt

statics:
	docker-compose exec api ./manage.py collectstatic --no-input

superuser:
	docker-compose exec api ./manage.py createsuperuser

app:
	docker-compose exec api ./manage.py startapp $(APP_NAME)

logs:
	docker-compose logs -f -t --tail=$(lines) $(service)

mergemigrations:
	docker-compose exec api ./manage.py makemigrations --merge

test:
	docker-compose exec api ./manage.py test

makemessages:
	docker-compose exec api ./manage.py makemessages -l es

compilemessages:
	docker-compose exec api ./manage.py compilemessages -f