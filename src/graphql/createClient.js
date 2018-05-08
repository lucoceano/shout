import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

export default function createClient(uri) {
  const cache = new InMemoryCache();

  const defaultOptions = {
    watchQuery: {
      errorPolicy: 'all',
    },
  };

  const link = ApolloLink.from([
    onError(({ graphQLErrors, networkError, response }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      }

      if (networkError) {
        console.log(`[Network error]: ${networkError} - ${response}`);
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
