import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query, Mutation } from 'react-apollo';
import { Navigation } from 'react-native-navigation';
import Snackbar from 'react-native-snackbar';
import gql from 'graphql-tag';
import { injectIntl } from 'react-intl';
import User from './User';
import { clearCookie } from '../../graphql/cookie';
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
    intl: PropTypes.shape({}).isRequired,
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
    const { intl } = this.props;
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
                    await clearCookie();
                    this.close();
                  } catch (e) {
                    Snackbar.show({ title: intl.formatMessage({ id: 'somethingWrong' }) });
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

const intlComponent = injectIntl(UserContainer);

intlComponent.path = 'com.lucoceano.User';

export default intlComponent;
