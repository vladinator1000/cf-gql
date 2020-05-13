const { RESTDataSource } = require('apollo-datasource-rest')

export default class PokemonAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://pokeapi.co/api/v2/'
  }

  async getPokemon(id: string) {
    return this.get(`pokemon/${id}`)
  }
}
