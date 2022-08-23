FROM node:latest as angular-app
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx
COPY --from=angular-app app/dist/angular-legacy-app2 /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t angular-legacy-app2 .
# docker run -p 8082:82 angular-legacy-app2