docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 node:16 bash

docker build -t mdssdev/helloexpress .

dockerfile.prod copia os arquivo para a imagem

docker build -t mdssdev/helloexpress . -f Dockerfile.prod
