FROM node:20-alpine AS runner

WORKDIR /usr/src/app

RUN npm i -g prisma@5.14.0

COPY ./sites/api/prisma ./prisma

CMD ["prisma", "migrate", "deploy"]
