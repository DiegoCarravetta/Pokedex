const express = require ('express');
const router = express.Router ();

const pokedexController = require ('../controllers/pokedex.controller');

router.get ('/allpokemon', pokedexController.findPokemonController);
router.get ('/findpokemon/:id', pokedexController.findPokemonByIdController);

module.exports = router;
