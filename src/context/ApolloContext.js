  
import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: `https://wacky-tent.flywheelsites.com/graphql`,
})