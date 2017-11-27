FROM resin/raspberrypi3-alpine-python:3.5.4-slim
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN pip install -r requirements.txt
CMD python app.py
