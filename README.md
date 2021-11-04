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

### :electric_plug: Instalação de dependências e execução da aplicação:
```bash
# Clone this repository:
$ git clone https://github.com/samuel-santos-batista/back-end-challenge-2021.git

# Enter the repository:
$ cd back-end-challenge-2021

# Create the app containers:
$ sudo docker-compose -f docker-compose-prod.yml up --build -d backend
