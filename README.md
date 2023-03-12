# Principais comandos usados no docker

## Irei adicionando as descrições gradativamente

---

### Executa um comando em um novo container

```bash
docker run
```

---

### Lista todos os containers

```bash
docker ps
```

---

### Lista todos os contêineres, incluindo os contêineres que estão em execução no momento e os que já foram parados

```bash
docker ps -a
```

---

### Lista os IDs de todos os contêineres (tanto os em execução quanto os parados)

```bash
docker ps -a -q
```

---

### Cria um novo contêiner Docker e executar um shell interativo dentro do contêiner

```bash
docker run -it
```

---

### executa um shell interativo dentro de um contêiner Docker (nginx) em execução

```bash
docker exec -it nginx bash
```

---

### Cria um novo contêiner Docker e executá-lo em segundo plano (modo daemon)

```bash
docker run -d
```

---

### Este comando cria um contêiner Docker a partir da imagem do Nginx, nomeia-o como "nginx", inicia-o em segundo plano, mapeia a porta 8080 do host para a porta 80 do contêiner, cria um ponto de montagem para compartilhar arquivos entre o host e o contêiner e executa o Nginx dentro do contêiner

```bash
docker run -d --name nginx -p 8080:80 --mount type=bind,source="$(pwd)"/html,target=/usr/share/nginx/html nginx
```

---

### Cria e executa um novo contêiner Docker a partir da imagem oficial do Nginx

A opção -d inicia o contêiner em segundo plano (modo daemon). A opção --name nginx define um nome personalizado para o contêiner, que pode ser usado para referenciá-lo posteriormente em outros comandos Docker. A opção -p 8080:80 mapeia a porta 8080 do host para a porta 80 do contêiner, permitindo que você acesse o Nginx a partir do navegador do host

A opção --mount type=bind,source="$(pwd)"/html,target=/usr/share/nginx/html cria um ponto de montagem que associa um diretório do host com um diretório dentro do contêiner. Isso permite que você compartilhe arquivos entre o host e o contêiner. Neste caso, o diretório atual do host é mapeado para o diretório padrão do Nginx que contém arquivos HTML
Por fim, a palavra "nginx" no final do comando indica a imagem Docker a ser usada como base para criar o contêiner

Este comando cria um contêiner Docker a partir da imagem do Nginx, nomeia-o como "nginx", inicia-o em segundo plano, mapeia a porta 8080 do host para a porta 80 do contêiner, cria um ponto de montagem para compartilhar arquivos entre o host e o contêiner e executa o Nginx dentro do contêiner

```bash
docker run -d --name nginx -p 8080:80 nginx -v /home/mdss-dev/workspaces/fullcycle/docker/html:/usr/share/nginx/html
```

---

### Remover um ou mais contêineres Docker

```bash
docker rm
```

---

### Forçar a remoção de um ou mais contêineres Docker. A opção -f ou --force força a remoção do contêiner, mesmo se ele estiver em execução

```bash
docker rm -f
```

---

### Remove todos os contêineres Docker que estão atualmente parados ou em execução. Ele funciona da seguinte forma

docker ps -a -q lista todos os IDs de contêineres (parados e em execução).
`$()`é usado para executar o comando docker ps -a -q e inserir a saída como argumento para o comando docker rm.
docker rm remove o(s) contêiner(es) especificado(s).
-f é usado para forçar a remoção do(s) contêiner(es) em execução.

```bash
docker rm $(docker ps -a -q) -f
```

---

### Gerenciamento dos volumes no Docker

```bash
docker volume
```

---

### Listar todos os volumes existentes

```bash
docker volume ls
```

---

### Criar um novo volume

```bash
docker volume create (nomedovolume)
```

---

### Inspectar informações sobre um volume específico

```bash
docker volume inspect (nomedovolume)
```

---

### Cria um novo contêiner Docker baseado na imagem oficial do Nginx, definindo um ponto de montagem e um volume para armazenar dados fora do contêiner

```bash
docker run -d --name nginx --mount type=volume,source=meuvolume,target=/app nginx
```

---

### Cria um novo contêiner Docker baseado na imagem oficial do Nginx, definindo um ponto de montagem e um volume para armazenar dados fora do contêiner. É uma maneira mais simplificada de criar e montar volumes do que a opção`--mount`

```bash
docker run -d --name nginx -v meuvolume:/app nginx
```

---

### Remove todos os volumes que não estão sendo usados por nenhum contêiner. Isso ajuda a limpar o espaço de armazenamento no host do Docker, removendo dados desnecessários e liberando recursos. Pode ser usado `-f` ou `--force`

```bash
docker volume prune
```

---

### Lista todas as imagens armazenadas localmente no host do Docker. Esse comando exibe informações como o nome da imagem, a tag, o ID da imagem, o tamanho e a data de criação

```bash
docker images
```

---

### Baixar uma imagem do Docker Hub ou de um registro de contêineres

```bash
docker pull nomedaimagem
```

---

### Remove uma imagem localmente do host do Docker

```bash
docker rmi nomedaimagem
```

---

### Constroe uma nova imagem a partir de um Dockerfile e atribuir a ela um nome e uma tag específicos

Ao executar o comando, o Docker procura pelo arquivo Dockerfile no diretório atual (representado pelo ponto .) e usa as instruções definidas no Dockerfile para construir uma nova imagem. O argumento -t é usado para atribuir um nome e uma tag à imagem recém-construída. O nome da imagem é composto por dois componentes: o nome do usuário/organização ou o nome do registro de contêineres (neste caso, "mdssdev") e o nome da imagem em si (neste caso, "nginx-com-vim"). A tag é usada para especificar uma versão específica da imagem (neste caso, "latest").

```bash
docker build -t mdssdev/nginx-com-vim:latest
```

---

### Envia uma imagem para um registro de contêineres, permitindo que outras pessoas acessem e usem a imagem

```bash
docker push nomedaimagem
```

---

### Cria redes isoladas que permitem que contêineres se comuniquem entre si, mesmo que estejam em hosts diferentes ou em diferentes redes físicas

```bash
docker network
```

---

### Lista todas as redes disponíveis no host Docker

```bash
docker network ls
```

---

### Obter informações detalhadas sobre uma rede específica no host Docker

Ele retorna um JSON com as seguintes informações sobre a rede especificada:

Name: o nome da rede.
ID: o ID exclusivo da rede.
Scope: o escopo da rede (por exemplo, local ou global).
Driver: o driver da rede (por exemplo, bridge, overlay, etc.).
IPAM: as informações do gerenciador de endereços IP da rede.
Containers: informações sobre os contêineres conectados à rede.
Options: opções adicionais da rede.

```bash
docker network inspect
```

---

### Cria uma nova rede no host Docker

Ao criar uma nova rede, você pode conectar contêineres a ela para que eles possam se comunicar uns com os outros

No exemplo que você forneceu, o comando docker network create --driver bridge minharede cria uma nova rede chamada minharede usando o driver bridge. O driver bridge é o driver de rede padrão do Docker, que permite que os contêineres se comuniquem uns com os outros em uma rede isolada do host.

Você pode personalizar a rede que está criando, especificando um driver de rede diferente, opções adicionais do driver de rede, um escopo diferente e muito mais. A documentação oficial do Docker fornece uma lista completa de drivers de rede e opções adicionais que você pode usar com o comando docker network create.

Depois de criar uma rede, você pode conectar contêineres a ela usando o comando docker run ou docker network connect.

```bash
docker network create --driver bridge minharede
```

---

### Cria um novo contêiner a partir da imagem ubuntu, com o nome ubuntu1 e executando o shell bash

Além disso, estamos conectando o contêiner à rede minharede usando o parâmetro --network.

Os parâmetros usados neste comando significam o seguinte:

-d: Executa o contêiner em segundo plano (modo detached).
-i: Mantém a entrada padrão STDIN do contêiner aberta.
-t: Aloca um terminal pseudo-TTY.
--name: Define um nome para o contêiner.
--network: Conecta o contêiner à rede especificada.
Dessa forma, o contêiner ubuntu1 será executado em segundo plano, mas ainda será possível interagir com ele por meio do terminal, se necessário. Além disso, o contêiner será conectado à rede minharede, permitindo a comunicação com outros contêineres que também estejam conectados à mesma rede.

```bash
docker run -dit --name ubuntu1 --network minharede bash
```

---

### Conecta um terminal a um contêiner em execução. Nesse exemplo, o comando docker attach ubuntu1 conectará o terminal padrão do host Docker ao contêiner ubuntu1

```bash
docker attach ubuntu1
```

---

### Executa o arquivo docker compose e sobe os containers ali configurados

```bash
 docker compose up
```

---

### Executa o arquivo docker compose e sobe os containers ali configurados em segundo plano

```bash
 docker compose up -d
```

---

### Desce os serviços

```bash
 docker compose down
```

---

### Executa o arquivo docker compose, rebuilda e sobe os containers em segudo plano

```bash
 docker compose up -d --build
```
