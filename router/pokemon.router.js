const express = require('express');
const router = express.Router();
const pokemonController = require('./../controller/pokemon.controller')

// router.get("/", (req, res)=>{
// console.log("hola desde ruta ")
// res.send("[desde una ruta]");
// })

router.get('/',pokemonController.getListPokemon)
router.get('/:id',pokemonController.getListPokemonporId)

module.exports=router;