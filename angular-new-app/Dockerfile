FROM node:latest as angular-app
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx
COPY --from=angular-app app/dist/angular-new-app /usr/share/nginx/html/new-app/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t angular-new-app .
# docker run -p 8082:82 angular-new-app