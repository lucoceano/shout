import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation, withApollo } from 'react-apollo';
import { Navigation } from 'react-native-navigation';
import Snackbar from 'react-native-snackbar';
import gql from 'graphql-tag';
import { injectIntl } from 'react-intl';
import Login from './Login';
import { isAlreadyLoggedInError } from '../../../lib/error';
import { storeCookie } from '../../../graphql/cookie';

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
    intl: PropTypes.shape({}).isRequired,
  };

  close = () => {
    Navigation.dismissModal();
  };

  success = async () => {
    const { client, intl } = this.props;
    client.resetStore();
    try {
      await storeCookie();
      this.close();
    } catch (e) {
      Snackbar.show({ title: intl.formtMessage({ id: 'couldNotLogin' }) });
    }
  };

  render() {
    const { intl } = this.props;
    return (
      <Mutation mutation={loginMutation}>
        {login => (
          <Login
            initialValues={initialValues}
            onClose={this.close}
            onSubmit={async input => {
              try {
                await login({ variables: { input } });
                await this.success();
              } catch ({ graphQLErrors }) {
                if (isAlreadyLoggedInError(graphQLErrors)) {
                  await this.success();
                  return;
                }
                Snackbar.show({ title: intl.formtMessage({ id: 'couldNotLogin' }) });
              }
            }}
          />
        )}
      </Mutation>
    );
  }
}

export default injectIntl(withApollo(LoginContainer));
