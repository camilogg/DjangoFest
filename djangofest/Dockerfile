FROM python:3.7
ENV PYTHONUNBUFFERED 1
RUN apt-get update && apt-get install -y gettext
RUN mkdir /djangofest
WORKDIR /djangofest
COPY requirements.txt /djangofest/
RUN pip install -r requirements.txt
COPY . /djangofest/
