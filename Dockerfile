FROM 20-alpine3.17

WORKDIR /app

RUN apk update && apk upgrade

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE $NUXT_PORT

CMD [ "npm", "start" ]

