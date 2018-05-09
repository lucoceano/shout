import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Navigation } from 'react-native-navigation';
import Snackbar from 'react-native-snackbar';
import gql from 'graphql-tag';
import Login from './Login';

const loginMutation = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      name
    }
  }
`;

class LoginContainer extends Component {
  close = () => {
    Navigation.dismissModal();
  };

  render() {
    return (
      <Mutation mutation={loginMutation}>
        {login => (
          <Login
            onClose={this.close}
            onSubmit={async input => {
              try {
                await login({ variables: { input } });
                this.close();
              } catch (e) {
                Snackbar.show({ title: 'Não foi possível fazer login' });
              }
            }}
          />
        )}
      </Mutation>
    );
  }
}

export default LoginContainer;
