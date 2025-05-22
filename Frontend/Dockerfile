# Étape 1 : Build Vite
FROM node:24.0.2-alpine AS builder

WORKDIR /app

# Copier uniquement les fichiers nécessaires au début (cache docker)
COPY package*.json ./
RUN npm install

# Copier tout le reste et lancer le build
COPY . .
RUN npm run build

# Étape 2 : Serveur Nginx
FROM nginx:alpine

# Copier ta configuration nginx personnalisée
COPY nginx.conf /etc/nginx/nginx.conf

# Copier le build Vite (dans dist/) dans le dossier Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
