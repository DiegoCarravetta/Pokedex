const express = require ('express');
const port = 3000;
const app = express ();

app.use (express.json ());

const pokedex = [
  {
    id: 1,
    name: 'Bulbasaur',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    type1: 'Grass',
    type2: 'Poison'
  },
];

app.get ('/pokedex/allpokemon', (req, res) => {
  res.send (pokedex);
});

app.listen (port, () => {
  console.log (`O servidor está rodando em http://localhost:${port}`);
});
