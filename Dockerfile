# build
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# serve
FROM nginx:1.25-alpine
COPY --from=build /app/dist /usr/share/nginx/html
# nginx por defecto expone 80

