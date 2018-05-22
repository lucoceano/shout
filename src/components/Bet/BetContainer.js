import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Snackbar from 'react-native-snackbar';
import { injectIntl } from 'react-intl';
import Bet from './Bet';
import Auth from '../Auth';
import { isNotLoggedInError } from '../../lib/error';
import removeTypename from '../../lib/removeTypename';
import betFragment from '../../graphql/fragments/bet';

const betQuery = gql`
  query bet($matchId: String!) {
    bet(matchId: $matchId) {
      ...bet
    }
  }
  ${betFragment}
`;

const betMutation = gql`
  mutation configureBet($input: BetInput!) {
    configureBet(input: $input) {
      ...bet
    }
  }
  ${betFragment}
`;

const initialValues = { penalty: false };

class BetContainer extends Component {
  static propTypes = {
    match: PropTypes.shape({}).isRequired,
    intl: PropTypes.shape({}).isRequired,
  };

  onLoginRequest = () => {
    Navigation.showModal({
      screen: Auth.path,
    });
  };

  render() {
    const { match, intl } = this.props;
    return (
      <Mutation mutation={betMutation}>
        {configureBet => (
          <Query query={betQuery} variables={{ matchId: match.id }}>
            {({ loading, data: { bet } = {}, error = {} }) => (
              <Bet
                initialValues={removeTypename(bet || initialValues)}
                loading={loading}
                loggedIn={Boolean(bet || !isNotLoggedInError(error.graphQLErrors))}
                bet={bet}
                match={match}
                onLoginRequest={this.onLoginRequest}
                onSubmit={async ({ id, ...input }) => {
                  try {
                    await configureBet({
                      variables: { input: { ...input, matchId: match.id } },
                    });
                    Snackbar.show({ title: intl.formatMessage({ id: 'betSavedSucessfully' }) });
                  } catch (e) {
                    Snackbar.show({ title: intl.formatMessage({ id: 'betCouldNotBeSaved' }) });
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

export default injectIntl(BetContainer);
