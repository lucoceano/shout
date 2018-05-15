import { AsyncStorage } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { startCache } from './cache';

export default function createClient(uri) {
  const cache = new InMemoryCache();

  startCache({
    cache,
    storage: AsyncStorage,
    trigger: 'background',
  });

  const defaultOptions = {
    watchQuery: {
      errorPolicy: 'all',
      fetchPolicy: 'cache-and-network',
    },
  };

  const link = ApolloLink.from([
    onError(({ graphQLErrors, networkError, response }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, code, locations, path }) =>
          // eslint-disable-next-line
          console.log(
            `[GraphQL error]: Message: ${message}, Code: ${code}, Location: ${locations}, Path: ${path}`,
          ),
        );
      }

      if (networkError) {
        console.log(`[Network error]: ${networkError} - ${response}`); // eslint-disable-line
      }
    }),
    new HttpLink({
      uri,
      credentials: 'include',
    }),
  ]);

  return new ApolloClient({
    cache,
    link,
    defaultOptions,
  });
}
