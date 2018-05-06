import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

export default function createClient({ uri }) {
  const cache = new InMemoryCache();

  const link = new HttpLink({
    uri,
    credentials: 'include',
  });

  return new ApolloClient({
    cache,
    link,
  });
}
