# stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# stage 2
FROM nginx:alpine
## Remove default Nginx website
#RUN rm -rf /usr/share/nginx/html/*
COPY --from=node /app/dist/SmartBank-Client /usr/share/nginx/html

