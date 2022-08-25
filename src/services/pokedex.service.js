const pokedex = [
  {
    id: 1,
    name: 'Bulbasaur',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    type1: 'Grass',
    type2: 'Poison',
  },
];

const findPokemonService = () => {
  return pokedex;
};

const findPokemonByIdService = (id) => {
  return pokedex.find ((pokemon) => pokemon.id === id);
};

module.exports = {
  findPokemonService,
  findPokemonByIdService,
};
