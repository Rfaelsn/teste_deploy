FROM node:18

WORKDIR /usr/estagio_legal_back

#Copiando os arquivos de dependencias para o contêiner32262602f7172b1a0b570f4b2b2312c4398dcb
COPY . .

RUN npm i

RUN npm run build

RUN npx prisma generate

RUN npx prisma migrate

CMD ["npm", "run", "start:prod"]
# #porta exposta
# EXPOSE 3001
