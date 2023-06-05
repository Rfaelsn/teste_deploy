FROM node:18

WORKDIR /usr/estagio_legal_back

#Copiando os arquivos de dependencias para o contêiner
COPY package.json ./
COPY package-lock.json ./

RUN npm ci --production

COPY . .

RUN npm run build

RUN npx prisma generate

RUN npx prisma migrate deploy



CMD ["npm", "run", "start:prod"]
# #porta exposta
# EXPOSE 3001
