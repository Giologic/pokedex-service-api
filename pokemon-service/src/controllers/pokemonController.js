import { 
    getAllPokemon, 
    getPokemonById, 
    getPokemonByName 
} 
from '../services/pocketbaseService.js';

export const getAllPokemonHandler = async (req, res) => {
    try {
        const records = await getAllPokemon();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPokemonByIdHandler = async (req, res) => {
    try {
        const record = await getPokemonById(req.params.id);
        res.status(200).json(record);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPokemonByNameHandler = async (req, res) => {
    try {
        const record = await getPokemonByName(req.params.name);
        res.status(200).json(record);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

