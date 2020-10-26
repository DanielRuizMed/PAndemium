FROM node:14-slim
LABEL version="0.3.0" maintainer="drm19933@gmail.com"

COPY package*.json ./

RUN apt-get update -y && \
    useradd -r -u 5000 daniel && \ 
    npm install --no-optional --no-install-recommends && \
    npm install -g grunt-cli && \
    rm package*.json && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /test

ENV PATH=/node_modules/.bin:$PATH

USER daniel

CMD [ "grunt" ]