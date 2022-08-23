<a name="readme-top"></a> <!-- Um link lateral para subir a tela até o topo -->

<div align="center"> <!-- Uma div com align center para deixar as informações centralizadas -->

  [![MIT License][license-shield]](https://github.com/DiegoCarravetta/Pokedex/blob/main/LICENSE) <!-- Nos parenteses, eu coloco o endereço do site -->
  [![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/diego-carravetta-4aa0a5215/)
</div>

<br />

<div align="center"> <!-- Uma div com align center para colocar a logo do projeto centralizada -->
  <img src="images/Pokedex.png" alt="Logo" width="80" height="80">
</div>

<details> <!-- Índice -->
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#sobre">Sobre</a>
      <ul>
        <li><a href="#tecnologias">Tecnologias</a></li>
      </ul>
    </li>
    <li>
      <a href="#comecando">Começando o Projeto</a>
      <ul>
        <li><a href="#instalacao">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

## Sobre

Desenvolvimento de um CRUD completo, com o tema Pokedéx e persistência no banco de dados MongoDB, utilizando uma API.

Critérios de Avaliação:
* [GET] Leitura de todas os personagens (0,8);
* [GET] Leitura de personagens individuais (por ID) (0,8);
* [POST] Criação de personagens (0,8);
* [PUT] Edição de personagens por ID (0,8);
* [DELETE] Exclusão de personagens por ID (0,8).

Entrega:
O projeto deve ser entregue enviando o link do GitHub na atividade no Moodle.

<p align="right">(<a href="#readme-top">Voltar para o topo</a>)</p> <!-- Aqui eu uso o link lateral, setado no começo do código, que faz a página ir ao topo -->

### Ferramentas

Trabalharemos com as seguintes tecnologias:
* Motor NodeJS;
* Linguagem de Programação JavaScript;
* Framework Express;
* Estrutura de Dados JSON
* MongoDB;
* JWT;

<p align="right">(<a href="#readme-top">Voltar para o topo</a>)</p>

## Começando o Projeto

Abaixo estão listados os comandos do Terminal para instalação de ferramentas e componentes necessários para desenvolver o projeto.

* Clone o repositório;
   ```sh
   git clone https://github.com/DiegoCarravetta/Pokedex.git
   ```
* Crie uma pasta chamada:
   ```sh
   .vscode
   ```
* Dentro da pasta, crie uma arquivo chamado:
   ```sh
   settings.json
   ```
* Dentro do arquivo, digite o seguinte código:
   ```sh
  {
    "editor.codeActionsOnSave":
    {
      "source.fixAll": true
    },
    "files.eol": "\n",
    "files.insertFinalNewline": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[javascript]":
    {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
  }
   ```
* Na raiz crie um arquivo chamado:
   ```sh
   .prettierrc.json
   ```
* Dentro do arquivo, digite o seguinte código:
   ```sh
  {
    "trailingComma": "all",
    "singleQuote": true,
    "endOfLine": "lf",
    "tabWidth": 2,
    "arrowParens": "always",
    "printWidth": 80
  }
   ```

### Instalação

A partir de agora, siga essas instalações, pelo terminal, para poder fazer com que a API rode em seu sistema:

* Instale o NPM;
   ```sh
   npm init -y
   ```
* Instale o Express;
   ```js
   npm i express
   ```
* Instale o Nodemon;
   ```js
   npm i nodemon -D
   ```
* Crie um Script no package.json;
   ```js
    "scripts": {
      "start": "node index",
      "dev": "nodemon index",
    },
   ```
* Configure o Cors;
   ```js
   npm i cors
   ```

<p align="right">(<a href="#readme-top">Voltar para o topo</a>)</p>

## Contato

Diego Carravetta - diegocarravetta@gmail.com

Link do Projeto: [https://github.com/DiegoCarravetta](https://github.com/DiegoCarravetta/Pokedex)

## Links Úteis <!-- Esses são os links dos escudos da license e Linkedin -- >

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge

<p align="right">(<a href="#readme-top">Voltar para o topo</a>)</p>
