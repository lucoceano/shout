import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query, Mutation } from 'react-apollo';
import { Navigation } from 'react-native-navigation';
import Snackbar from 'react-native-snackbar';
import gql from 'graphql-tag';
import User from './User';
import { getPersistor } from '../../graphql/cache';
import Leaderboard from '../Leaderboard';

const meQuery = gql`
  query me {
    me {
      id
      name
      email
      leaderboard {
        position
        points
      }
    }
  }
`;

const logoutMutation = gql`
  mutation logout {
    logout
  }
`;

class UserContainer extends Component {
  static propTypes = {
    navigator: PropTypes.shape({}).isRequired,
  };

  close = () => {
    Navigation.dismissModal();
  };

  goToLeaderboard = user => {
    const { navigator } = this.props;

    navigator.push({
      screen: Leaderboard.path,
      passProps: { user },
    });
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
                onLeaderboard={() => this.goToLeaderboard(me)}
                onLogout={async () => {
                  try {
                    await logout();
                    client.resetStore();
                    getPersistor().purge();
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
