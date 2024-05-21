FROM node:21

WORKDIR /app

COPY . .

RUN rm -rf node_modules && \
    npm install

EXPOSE 3305

RUN npx prisma generate
    
CMD npx prisma db push --accept-data-loss;

ENTRYPOINT npm run start