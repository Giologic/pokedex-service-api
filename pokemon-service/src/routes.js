import express from 'express';

import { 
    getAllPokemon, 
    getPokemonById 
} from './controllers.js';

const router = express.Router();

router.get('/pokemon', getAllPokemon);
router.get('/pokemon/:id', getPokemonById);

export default router;