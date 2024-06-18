import pb from './pocketbase.js';

export const getAllPokemon = async (req, res) => {
    try {
        const records = await pb.collection('pokemon').getFullList();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getPokemonById = async (req, res) => {
    try {
        const record = await pb.collection('pokemon').getFullList({ filter: `pokemon_id="${req.params.id}"` });
        console.log(record)
        res.status(200).json(record);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

