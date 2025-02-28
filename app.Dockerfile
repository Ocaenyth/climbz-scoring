FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY ./package.json /yarn.lock ./
COPY sites/app/package.json ./sites/app/

RUN yarn --frozen-lockfile

COPY sites/app ./sites/app

ARG PUBLIC_API_URL
ENV PUBLIC_API_URL=${PUBLIC_API_URL}

RUN yarn workspace @climbz-scoring/app build

FROM nginx:alpine AS runner

COPY ./.docker/app.nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/src/app/sites/app/dist /usr/share/nginx/html