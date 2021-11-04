# Back-end Challenge 🏅 2021


# Aplicação para aluguel de carros

# O que é? 
##### A aplicação tem como intuito o desenvolvimento de api para base de clientes

### Algumas funcionalidades do sistema:
* ##### Importação de usuários por meio de Background Jobs 
* ##### Atualização dos dados do usuário
* ##### Listagem de usuários
* ##### Listagem de usuário

# Tecnologias:
* ##### TypeScript
* ##### MongoDB
* ##### DOCKER

# API:
* ##### GET /: Retornar uma mensagem "REST" 
* ##### PUT /users/:userId: Será responsável por receber atualizações dso dados
* ##### DELETE /users/:userId: Remover o user da base
* ##### GET /users/:userId: Obter a informação somente de um user da base de dados
* ##### GET /users: Listar todos os usuários da base de dados

## Como usar (developing):

Para clonar e executar esta API, você precisará do seguinte software instalado no seu computador:

- [Git][git]
- [Docker][docker]

### :electric_plug: Install dependencies and run the application:
```bash
# Clone this repository:
$ git clone https://github.com/i-ramoss/rentx.git

# Enter the repository:
$ cd RentX

# Create the app containers:
$ docker-compose up -d

# Make a copy of the file "ormconfig.example.json" with the name "ormconfig.json":
# Fill in the correct data to be able to connect to the database
$ cp ormconfig.example.json ormconfig.json

# Make a copy of the ".env.example" file with the name ".env":
# Some environment variables are essential for the API to work in production
$ cp .env.example .env

# Run the migrations:
$ yarn typeorm migrations:run

# Start the application
$ yarn dev

# The server is running at port 3333 (http://localhost:3333/)

# To stop the database:
$ docker-compose stop
```

### 🧪 Run the tests:
```bash
# To run all tests and generate coverage reports:
$ yarn test

# To observe the functionality tests that are being changed:
$ yarn test:watch

# The coverage reports can be seen by going to /coverage/lcov-report/index.html and opening this html file in your browser. 
```

## :books: Documentation:
All API endpoints have been documented using Swagger. To view just access the URL below or click on this [link](https://deploy.ianramos.dev/api-docs/). <br>
*Remember to start the server first*

Local: *http://localhost:3333/api-docs* <br>
Production *https://deploy.ianramos.dev/api-docs/*