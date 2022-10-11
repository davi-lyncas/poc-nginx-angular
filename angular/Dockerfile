FROM node:latest as angular-app
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx
COPY --from=angular-app app/dist/app /usr/share/nginx/html/app/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t app .
# docker run -p 8082:82 app