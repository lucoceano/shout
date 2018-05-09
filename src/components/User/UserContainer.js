import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import User from './User';

const meQuery = gql`
  query me {
    me {
      name
    }
  }
`;

function UserContainer() {
  return (
    <Query query={meQuery}>
      {({ loading, data: { me } = {} }) => <User loading={loading} user={me} />}
    </Query>
  );
}

UserContainer.path = 'com.lucoceano.User';

export default UserContainer;
