import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Navigation } from 'react-native-navigation';
import Snackbar from 'react-native-snackbar';
import gql from 'graphql-tag';
import User from './User';

const meQuery = gql`
  query me {
    me {
      name
    }
  }
`;

const logoutMutation = gql`
  mutation logout {
    logout
  }
`;

class UserContainer extends Component {
  close = () => {
    Navigation.dismissModal();
  };

  render() {
    return (
      <Mutation mutation={logoutMutation}>
        {logout => (
          <Query query={meQuery} fetchPolicy="network-only">
            {({ client, loading, data: { me } = {} }) => (
              <User
                loading={loading}
                user={me}
                onClose={this.close}
                onLogout={async () => {
                  try {
                    await logout();
                    client.resetStore();
                    this.close();
                  } catch (e) {
                    Snackbar.show({ title: 'Ocorreu um erro' });
                  }
                }}
              />
            )}
          </Query>
        )}
      </Mutation>
    );
  }
}

UserContainer.path = 'com.lucoceano.User';

export default UserContainer;
