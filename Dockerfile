FROM nginx:latest

WORKDIR /app
RUN apt update && \
    apt install vim -y

COPY html/ /usr/share/nginx/html