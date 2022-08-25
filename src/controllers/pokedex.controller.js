const pokedexService = require ('../services/pokedex.service');

const findPokemonController = (req, res) => {
  const allPokemon = pokedexService.findPokemonService ();
  res.send (allPokemon);
};

const findPokemonByIdController = (req, res) => {
  const idParam = Number(req.params.id);
  const chosenPokemon = pokedexService.findPokemonByIdService (idParam);
  res.send (chosenPokemon);
};

module.exports = {
  findPokemonController,
  findPokemonByIdController,
};
