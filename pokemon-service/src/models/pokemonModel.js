const PokemonModel = {
    pokemon_id: '', // Unique identifier for the Pokémon
    name: '', // Name of the Pokémon (string)
    type: [], // Array of strings representing the types of the Pokémon
    abilities: [], // Array of strings representing the abilities of the Pokémon
    base_stats: {
        hp: 0, // Base HP stat (integer)
        attack: 0, // Base attack stat (integer)
        defense: 0, // Base defense stat (integer)
        special_attack: 0, // Base special attack stat (integer)
        special_defense: 0, // Base special defense stat (integer)
        speed: 0 // Base speed stat (integer)
    }
};

export default PokemonModel;
