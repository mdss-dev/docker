FROM nginx:latest

ENTRYPOINT [ "echo", "Hello" ] #sepre é executado com esse parametros

CMD [ "World" ] #os parametros podem ser alterado na hora em que forem chamados 

WORKDIR /app
RUN apt update && \
    apt install vim -y

COPY html/ /usr/share/nginx/html