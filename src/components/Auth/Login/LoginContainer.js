import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation, withApollo } from 'react-apollo';
import { Navigation } from 'react-native-navigation';
import Snackbar from 'react-native-snackbar';
import gql from 'graphql-tag';
import Login from './Login';
import { isAlreadyLoggedInError } from '../../../lib/error';

// eslint-disable-next-line
const initialValues = __DEV__ ? { email: 'lucoceano@gmail.com', password: 'Mamamia27' } : undefined;

const loginMutation = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      name
      email
    }
  }
`;

class LoginContainer extends Component {
  static path = 'com.lucoceano.Login';

  static propTypes = {
    client: PropTypes.shape({}).isRequired,
  };

  close = () => {
    Navigation.dismissModal();
  };

  success = () => {
    const { client } = this.props;
    client.resetStore();
    this.close();
  };

  render() {
    return (
      <Mutation mutation={loginMutation}>
        {(login, { client }) => (
          <Login
            initialValues={initialValues}
            onClose={this.close}
            onSubmit={async input => {
              try {
                await login({ variables: { input } });
                this.success(client);
              } catch ({ graphQLErrors }) {
                if (isAlreadyLoggedInError(graphQLErrors)) {
                  this.success(client);
                  return;
                }
                Snackbar.show({ title: 'Não foi possível fazer login' });
              }
            }}
          />
        )}
      </Mutation>
    );
  }
}

export default withApollo(LoginContainer);
