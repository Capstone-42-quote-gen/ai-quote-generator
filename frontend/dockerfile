# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:16 as build-stage
COPY ./ ./
RUN npm install && npm cache clean --force
RUN npm run build


# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage ./dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]