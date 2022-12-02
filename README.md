## Sobre o Projeto

O projeto Digital Bank, é uma aplicação voltada em Backend onde se pode realizar a depósitos e transferências de uma conta à outra através de seu CPF(Cadastro de Pessoas Físicas). O projeto foi desenvolvido em cerca de 6 dias.<br>

## O que foi passado no desafio:

Foi proposto para desenvolver o back-end para com arquitetura API REST. Optei por MySQL dentre outros sugeridos. No cenário do desafio, o usuário transfere valores de uma conta para outra com algumas ressalvas:

**Permitidos**
 - Permitido cadastrar uma conta por pessoa com o CPF e nome da pessoa;

**Não permitidos**
 - Não é permitido valores negativos nas contas;
 - Não é permitido transações acima de R$2.000,00(Dois Mil Reais)

## Tecnologias utilizadas:

- [NodeJs](https://nodejs.org/pt-br/docs//)
- [Express](https://expressjs.com/pt-br/)
- [MySQL](https://www.mysql.com/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Sequelize](https://sequelize.org/docs/v6/)
- [Docker](https://docs.docker.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [ChaiJs](https://www.chaijs.com/)
- [SinonJs](https://sinonjs.org/)

# Sobre o que foi desenvolvido no projeto:
👨🏾‍💻 Foram utilizadas metodologias que são aplicadas no mercado de trabalho, principalmente na organização das pastas e o nome de cada uma delas, ja sendo feito pensando em atualizações futuras, com a pesquisa orientada a pastas e não só a arquivos, pois em uma grande aplicação muitos nomes de arquivos podem se repetir.

🔥 Foram feitos diversos commits pensando em mostrar a trajetória do projeto desde seu inicio, com pequenos e descritivos commits.

### 2 - "Buildar" docker-compose com o backend e db
##### Obs(Sem o "-d" no final do comando, o npm start já estará rodando no docker e pronto para os comandos propostos abaixoy)
    $ docker-compose up --build

### 3 - Criar tabela do usuário
    $ npx sequelize db:migrate

### 4 - Comando para executar test no projeto
    $ npm test


## Guia de Rotas !

### 1 - Criar usuário:
    http://localhost:3001/users/register

    {
      "cpf": "92884402839",
      "username": "Theo Duarte"
    }

### 2 - Depositar valor para usuário:
    http://localhost:3001/users/balance

    {
    "cpf": "77056359922",
    "balance": "2000.55"
    }

### 3 - Transferir valor de um usário para outro usuário:
    http://localhost:3001/users/transfer

    {
      "cpfSender": "77056359922",
      "cpf": "92884402839",
      "balance": "401.65"
    }