import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Snackbar from 'react-native-snackbar';
import Bet from './Bet';
import Login from '../Login';
import { isNotLoggedInError } from '../../lib/error';
import removeTypename from '../../lib/removeTypename';

const betQuery = gql`
  query bet($matchId: String!) {
    bet(matchId: $matchId) {
      id
      score {
        home
        away
      }
      penalty
    }
  }
`;

const betMutation = gql`
  mutation configureBet($input: BetInput!) {
    configureBet(input: $input) {
      id
      score {
        home
        away
      }
      penalty
    }
  }
`;

class BetContainer extends Component {
  static propTypes = {
    match: PropTypes.shape({}).isRequired,
  };

  onLoginRequest = () => {
    Navigation.showModal({
      screen: Login.path,
    });
  };

  render() {
    const { match } = this.props;
    return (
      <Mutation mutation={betMutation}>
        {configureBet => (
          <Query query={betQuery} variables={{ matchId: match.id }}>
            {({ loading, data: { bet } = {}, error = {} }) => (
              <Bet
                initialValues={removeTypename(bet)}
                loading={loading}
                loggedIn={Boolean(bet || !isNotLoggedInError(error.graphQLErrors))}
                bet={bet}
                match={match}
                onLoginRequest={this.onLoginRequest}
                onSubmit={async ({ id, ...input }) => {
                  try {
                    await configureBet({ variables: { input: { ...input, matchId: match.id } } });
                    Snackbar.show({ title: 'Palpite salvo com sucesso!' });
                  } catch (e) {
                    Snackbar.show({ title: 'Não foi possível salvar seu palpite!' });
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

export default BetContainer;
