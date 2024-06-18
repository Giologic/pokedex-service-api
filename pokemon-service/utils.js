import PokemonModel from "./src/models/pokemonModel"

export const transformToModel = (data) => {
    return {
        ...PokemonModel,
        ...data,
        type: JSON.stringify(data.type),
        abilities: JSON.stringify(data.abilities),
        base_stats: JSON.stringify(data.base_stats)
    }
}