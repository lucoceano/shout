import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { init } from './cookie';
import authLink from './authLink';

export default function createClient(uri) {
  const cache = new InMemoryCache();
  init(uri);

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
    authLink,
    new HttpLink({
      uri,
      credentials: 'include',
    }),
  ]);

  return new ApolloClient({
    link,
    cache,
    defaultOptions,
  });
}
