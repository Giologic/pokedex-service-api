import express from 'express';

import { 
    getAllPokemonHandler,
    getPokemonByIdHandler,
    getPokemonByNameHandler,
} from '../controllers/pokemonController.js';

const router = express.Router();

router.get('/pokemon', getAllPokemonHandler);
router.get('/pokemon/:id', getPokemonByIdHandler);
router.get('/pokemon/name/:name', getPokemonByNameHandler);

export default router;