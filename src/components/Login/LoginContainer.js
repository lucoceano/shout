import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Login from './Login';

const loginMutation = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      name
    }
  }
`;

function LoginContainer() {
  return (
    <Mutation mutation={loginMutation}>
      {login => (
        <Login
          onSubmit={async input => {
            await login({ variables: { input } });
          }}
        />
      )}
    </Mutation>
  );
}

export default LoginContainer;
