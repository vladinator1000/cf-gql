export default {
  Query: {
    pokemon: async (_: any, { id }: any, { dataSources }: any) => {
      return dataSources.pokemonAPI.getPokemon(id)
    },
  },
}