import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Snackbar from 'react-native-snackbar';
import Match from '../Match';
import Matches from './Matches';
import matchFragment from '../../graphql/fragments/match';

const pollingInterval = 5000;
const matchesQuery = gql`
  query matches {
    matches {
      ...match
    }
  }
  ${matchFragment}
`;

class MatchesContainer extends Component {
  static propTypes = {
    navigator: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  navigateToMatch = match => {
    this.props.navigator.push({ screen: Match.path, passProps: { match } });
  };

  render() {
    return (
      <Query query={matchesQuery} pollInterval={pollingInterval} networkPolicy="network-only">
        {({ loading, data: { matches } = {}, error }) => {
          if (error) {
            Snackbar.show({ title: 'Ocorreu um erro.' });
          }
          return <Matches loading={loading} matches={matches} onItemClick={this.navigateToMatch} />;
        }}
      </Query>
    );
  }
}
export default MatchesContainer;
