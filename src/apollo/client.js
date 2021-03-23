import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://wacky-tent.flywheelsites.com/graphql',
    fetch,
  }),
  cache: new InMemoryCache()
});