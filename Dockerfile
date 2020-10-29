FROM node:14-slim
LABEL version="0.3.0" maintainer="drm19933@gmail.com"

RUN npm i -g grunt-cli && mkdir test && chown node:node test && \
    npm uninstall -g yarn

USER node

WORKDIR /home/node

COPY package*.json ./

RUN npm i --no-optional --no-install-recommends && \
    rm package*.json

WORKDIR /test

RUN cp -R /home/node/* /test && rm -r /home/node/node_modules
VOLUME [ "/test/node_modules" ]

CMD grunt test