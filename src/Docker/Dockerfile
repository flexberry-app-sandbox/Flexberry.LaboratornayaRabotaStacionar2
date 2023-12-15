FROM node:12 as ember_app

COPY /src/ember-app /src/ember-app

RUN \
  set -x; \
  cd /src/ember-app/; \
  yarn global add ember-cli@3.1.4; \
  yarn global add bower;

RUN \
  set -x; \
  cd /src/ember-app/; \
  yarn install ; \
  bower install  --allow-root;

RUN \
  set -x; \
  cd /src/ember-app/; \
  ember build --environment=docker

FROM mono:latest as backend

COPY /src/Laboratornaya_rabota_Stacionar_2 /src/Laboratornaya_rabota_Stacionar_2

RUN \
 cd /src/Laboratornaya_rabota_Stacionar_2 ;\
 nuget restore Laboratornaya_rabota_Stacionar_2.sln; \
 msbuild /p:Configuration=Release Laboratornaya_rabota_Stacionar_2.sln

FROM flexberry/mono-xsp:latest

MAINTAINER mail@flexberry.net

COPY --from=backend /src/Laboratornaya_rabota_Stacionar_2/ODataBackend /app
COPY --from=ember_app /src/ember-app/dist /app
WORKDIR /app
