import { ApolloServer, graphqlCloudflare } from 'apollo-server-cloudflare'

import KVCache from '../cache'
import PokemonAPI from '../datasources/pokeapi'
import { GqlHandlerOptions } from './handler.types'
import { typeDefs, resolvers } from '../gql'

const dataSources = () => ({
  pokemonAPI: new PokemonAPI(),
})

const createServer = (graphQLOptions: GqlHandlerOptions) =>
  new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    // @ts-ignore
    dataSources,
    ...(graphQLOptions.kvCache ? { cache: new KVCache() } : {}),
  })

export default (request: Request, graphQLOptions: GqlHandlerOptions) => {
  const server = createServer(graphQLOptions)

  // @ts-ignore
  return graphqlCloudflare(() => server.createGraphQLServerOptions(request))(request)
}

