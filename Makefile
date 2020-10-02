migrate:
	docker-compose exec djangofest ./manage.py makemigrations
	docker-compose exec djangofest ./manage.py migrate

requirements:
	docker-compose exec djangofest pip install -r requirements.txt

statics:
	docker-compose exec djangofest ./manage.py collectstatic --no-input

superuser:
	docker-compose exec djangofest ./manage.py createsuperuser

app:
	docker-compose exec djangofest ./manage.py startapp $(APP_NAME)

logs:
	docker-compose logs -f -t --tail=$(lines) $(service)

mergemigrations:
	docker-compose exec djangofest ./manage.py makemigrations --merge

test:
	docker-compose exec djangofest ./manage.py test

makemessages:
	docker-compose exec djangofest ./manage.py makemessages -l es

compilemessages:
	docker-compose exec djangofest ./manage.py compilemessages -f