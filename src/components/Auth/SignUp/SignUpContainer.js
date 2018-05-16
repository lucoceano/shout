import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation, withApollo } from 'react-apollo';
import { Navigation } from 'react-native-navigation';
import Snackbar from 'react-native-snackbar';
import gql from 'graphql-tag';
import { injectIntl } from 'react-intl';
import SignUp from './SignUp';
import { isAlreadyLoggedInError } from '../../../lib/error';
import { storeCookie } from '../../../graphql/cookie';

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
        {(login, { client }) => (
          <SignUp
            onSubmit={async input => {
              try {
                await login({ variables: { input } });
                await this.success(client);
              } catch ({ graphQLErrors }) {
                if (isAlreadyLoggedInError(graphQLErrors)) {
                  this.success(client);
                  return;
                }
                Snackbar.show({ title: intl.formatMessage({ id: 'couldNotSignup' }) });
              }
            }}
          />
        )}
      </Mutation>
    );
  }
}

export default injectIntl(withApollo(SignUpContainer));
