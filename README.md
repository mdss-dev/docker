# Principais comandos usado no docker

## Irei colocar a descrição futuramente

# Descrição

docker run

# Descrição

docker ps

# Descrição

docker ps -a

# Descrição

docker ps -a -q

# Descrição

docker run -it

# Descrição

docker exec -it nginx bash

# Descrição

docker run -d

# Descrição

docker run -d --name nginx -p 8080:80 nginx -v /home/mdss-dev/workspaces/fullcycle/docker/html:/usr/share/nginx/html

# Descrição

docker run -d --name nginx -p 8080:80 --mount type=bind,source="$(pwd)"/html,target=/usr/share/nginx/html nginx

# Descrição

docker rm

# Descrição

docker rm -f

# Descrição

docker rm $(docker ps -a -q) -f

# Descrição

docker volume

# Descrição

docker volume ls

# Descrição

docker volume create (nomedovolume)

# Descrição

docker volume inspect (nomedovolume)

# Descrição

docker run -d --name nginx --mount type=volume,source=meuvolume,target=/app nginx

# Descrição

docker run -d --name nginx -v meuvolume:/app nginx

# Descrição

docker volume prune

# Descrição

docker images

# Descrição

docker pull nomedaimagem

# Descrição

docker rmi nomedaimagem

# Decrição

docker build -t mdssdev/nginx-com-vim:latest .

# Descrição

docker push nomedaimagem

# Descrição

docker pull nomedaimagem

# Descrição

docker network
docker network ls
docker network inspect

# Descrição

docker network create --driver bridge minharede

# Descrição

docker run -dit --name ubuntu1 --network minharede bash

# Descrição

docker attach ubuntu1

php -S localhost:8000 -t foo/

curl http://host.docker.internal:8000

php -S 0.0.0.0:8000
