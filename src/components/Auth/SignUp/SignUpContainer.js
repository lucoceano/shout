import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation, withApollo } from 'react-apollo';
import { Navigation } from 'react-native-navigation';
import Snackbar from 'react-native-snackbar';
import gql from 'graphql-tag';
import SignUp from './SignUp';
import { isAlreadyLoggedInError } from '../../../lib/error';
import { getPersistor } from '../../../graphql/cache';

const loginMutation = gql`
  mutation signup($input: SignupInput!) {
    signup(input: $input) {
      name
      email
    }
  }
`;

class SignUpContainer extends Component {
  static path = 'com.lucoceano.SignUp';

  static propTypes = {
    client: PropTypes.shape({}).isRequired,
  };

  close = () => {
    Navigation.dismissModal();
  };

  success = () => {
    const { client } = this.props;
    client.resetStore();
    getPersistor().purge();
    this.close();
  };

  render() {
    return (
      <Mutation mutation={loginMutation}>
        {(login, { client }) => (
          <SignUp
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

export default withApollo(SignUpContainer);
