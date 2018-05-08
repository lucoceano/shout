import React from 'react';
import { ApolloProvider } from 'react-apollo';
import createClient from './graphql/createClient';
import App from './components/App';
import './intl';

const apiURL = 'http://localhost:3000/graphql';

const client = createClient(apiURL);

export default () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
