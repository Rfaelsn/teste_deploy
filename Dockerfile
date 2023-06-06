FROM node:18

WORKDIR /usr/estagio_legal_back

#Copiando os arquivos de dependencias para o contêiner
COPY . .

RUN npm i

RUN npm run build

RUN npx prisma generate

CMD ["npm", "run", "start:prod"]
# #porta exposta
# EXPOSE 3001
