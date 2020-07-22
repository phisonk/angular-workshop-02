FROM node:12.18.2-stretch as builder
WORKDIR /app
# Depenedencies/library
COPY package*.json ./
RUN npm install
# COPY All files
COPY . .
ENV PATH="./node_modules/.bin:$PATH"
RUN ng build --prod --output-path docs

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=builder /app/docs/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
