import { InMemoryCache, ApolloClient } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
})
