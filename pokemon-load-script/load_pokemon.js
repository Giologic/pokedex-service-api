import Pokedex from 'pokedex-promise-v2';
import pb from './pocketbase.js';
const P = new Pokedex();


const fetchPokemonData = async () => {

    const username = 'gioantonvelez@gmail.com';
    const password = '1234567890';
    
    try {

        const adminSession = await pb.admins.authWithPassword(username, password);
        // Fetch list of Generation 1 Pokémon
        const response = await P.getGenerationByName('generation-i');
        const pokemonSpecies = response.pokemon_species;

        // Loop through each Pokémon species and fetch detailed data
        for (const species of pokemonSpecies) {
            const speciesData = await P.getPokemonByName(species.name);
            const pokemonData = {
                pokemon_id: speciesData.id,
                name: speciesData.name,
                type: speciesData.types.map(typeInfo => typeInfo.type.name),
                abilities: speciesData.abilities.map(abilityInfo => abilityInfo.ability.name),
                base_stats: {
                    hp: speciesData.stats.find(stat => stat.stat.name === 'hp').base_stat,
                    attack: speciesData.stats.find(stat => stat.stat.name === 'attack').base_stat,
                    defense: speciesData.stats.find(stat => stat.stat.name === 'defense').base_stat,
                    special_attack: speciesData.stats.find(stat => stat.stat.name === 'special-attack').base_stat,
                    special_defense: speciesData.stats.find(stat => stat.stat.name === 'special-defense').base_stat,
                    speed: speciesData.stats.find(stat => stat.stat.name === 'speed').base_stat,
                }
            };

            console.log(pokemonData)

            // Load the data into Pocketbase
            await pb.collection('pokemon').create(pokemonData);
            console.log(`Loaded ${pokemonData.name}`);
        }
        console.log('All Generation 1 Pokémon have been loaded into Pocketbase.');
    } catch (error) {
        console.error('Error loading Pokémon data:', error);
    }
};

try {
    fetchPokemonData();
} catch (error) {
    console.error('Error logging in as admin:', error);
}
