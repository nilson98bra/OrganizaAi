FROM node:16-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código da aplicação para o diretório de trabalho
COPY . .

# Expõe a porta em que a aplicação irá rodar
EXPOSE 3000

# Define o comando para iniciar a aplicação
CMD ["npm", "run","start:dev"]