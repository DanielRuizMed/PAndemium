FROM node:14-slim
LABEL version="0.3.0" maintainer="drm19933@gmail.com"

RUN apt-get update -y && \
    mkdir test && \
    useradd -r -u 5000 daniel && \
    npm install -g grunt-cli --no-optional --no-install-recommends

WORKDIR /test

COPY package*.json /test/
COPY Gruntfile.js /test/

#Segundo RUN necesitamos package.json para instalar dependecias y borramos lo que no necesitamos
RUN npm install --no-optional --no-install-recommends && \
    rm -rf /var/lib/apt/lists/* && \
    rm package*.json

USER daniel

CMD [ "grunt" ]