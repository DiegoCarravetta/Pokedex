const express = require ('express');
const cors = require ('cors');

const port = 3000;
const app = express ();

app.use (express.json ());
app.use (cors ());

const pokedex = [
  {
    id: 1,
    name: 'Bulbasaur',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    type1: 'Grass',
    type2: 'Poison',
  },
];

app.get ('/pokedex/allpokemon', (req, res) => {
  res.send (pokedex);
});

app.get ('/pokedex/findpokemon/:id', (req, res) => {
  const idParam = req.params.id;
  const chosenPokemon = pokedex.find ((pokemon) => pokemon.id == idParam);
  res.send (chosenPokemon);
});

app.listen (port, () => {
  console.log (`O servidor está rodando em http://localhost:${port}`);
});
