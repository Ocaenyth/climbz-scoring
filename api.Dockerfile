FROM node:20 AS base

WORKDIR /usr/src/app

COPY ./package.json /yarn.lock ./
COPY sites/api/package.json ./sites/api/

FROM base AS builder

RUN yarn --frozen-lockfile

COPY ./sites/api/prisma/schema.prisma ./sites/api/prisma/schema.prisma

RUN yarn workspace @climbz-scoring/api prisma generate

COPY sites/api ./sites/api

RUN yarn workspace @climbz-scoring/api build

FROM base AS runner

RUN yarn --prod --frozen-lockfile

COPY --from=builder /usr/src/app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /usr/src/app/sites/api/dist /usr/src/app/sites/api/dist

ENV PORT=80

WORKDIR /usr/src/app/sites/api/dist

CMD ["node", "main.js"]
