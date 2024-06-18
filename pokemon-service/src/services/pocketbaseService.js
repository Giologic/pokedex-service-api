import pb from './pocketbase.js';

export const getAllPokemon = async () => {
    return await pb.collection('pokemon').getFullList();
};

export const getPokemonById = async (id) => {
    const records = await pb.collection('pokemon').getFullList({
        filter: `pokemon_id="${id}"`
    });
    return records.length > 0 ? records[0] : null;
};

export const getPokemonByName = async (name) => {
    const records = await pb.collection('pokemon').getFullList({
        filter: `name="${name}"`
    });
    return records.length > 0 ? records[0] : null;
};