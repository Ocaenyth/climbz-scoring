FROM node:20-alpine AS runner

WORKDIR /usr/src/app

RUN npm i -g prisma@5.14.0

RUN ln -s /usr/lib/libssl.so.3 /lib/libssl.so.3

COPY ./sites/api/prisma ./prisma

CMD ["prisma", "migrate", "deploy"]
