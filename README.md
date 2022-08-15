<!-- Botão lateral para subir a tela -->
<a name="readme-top"></a>

<!-- Uma div com align center para deixar centralizado -->
<div align="center">

  <!-- Na últioma () eu coloco o endereço do site -->
  [![MIT License][license-shield]](https://github.com/DiegoCarravetta/Pokedex/blob/main/LICENSE)
  <!-- Preciso aprender a colocar meu link do Linkedin -->
  [![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/diego-carravetta-4aa0a5215/)

</div>

<!-- br para quebrar a linha -->
<br />

<!-- Uma div com align center para colocar a logo do projeto -->
<div align="center">
  <img src="images/Pokedex.png" alt="Logo" width="80" height="80">
</div>

<!-- Índice -->
<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <!-- Link para o título -->
      <a href="#sobre">Sobre</a>
      <ul>
        <li><a href="#ferramentas">Ferramentas</a></li>
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

<!-- Título Sobre -->
## Sobre

Estou desenvolvendo um CRUD completo, com tema Pokedéx e persistência no banco de dados MongoDB.

Critérios de Avaliação:
* [GET] Leitura de todas os personagens (0,8);
* [GET] Leitura de personagens individuais (por ID) (0,8);
* [POST] Criação de personagens (0,8);
* [PUT] Edição de personagens por ID (0,8);
* [DELETE] Exclusão de personagens por ID (0,8).

Entrega:
O projeto deve ser entregue enviando o link do GitHub na atividade no Moodle.

<!-- Aqui eu uso o link lateral para subir a tela -->
<p align="right">(<a href="#readme-top">Voltar para o topo</a>)</p>

### Ferramentas

Essas são as ferramentas utilizadas na produção do projeto:
* NodeJS;
* JavaScript;
* Express;
* MongoDB;
* JWT;

<p align="right">(<a href="#readme-top">Voltar para o topo</a>)</p>

## Começando o Projeto

Abaixo estão listados os comandos do Terminal para instalação de ferramentas e componentes necessários para desenvolver o projeto.

### Instalação

* Clone o repositório;
   ```sh
   git clone https://github.com/DiegoCarravetta/Pokedex.git
   ```
* Inicialize o projeto;
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

## Links Úteis

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge

<p align="right">(<a href="#readme-top">Voltar para o topo</a>)</p>
