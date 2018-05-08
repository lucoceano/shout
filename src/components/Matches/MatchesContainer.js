import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Match from '../Match';
import Matches from './Matches';

const pollingInterval = 5000;
const matchesQuery = gql`
  query matches {
    matches {
      id
      date
      number
      location
      teams {
        home {
          code
          emoji
        }
        away {
          code
          emoji
        }
      }
      score {
        home
        away
      }
    }
  }
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
      <Query query={matchesQuery} pollInterval={pollingInterval}>
        {({ loading, data: { matches } = {}, error }) => (
          <Matches
            loading={loading}
            error={error}
            matches={matches}
            onItemClick={this.navigateToMatch}
          />
        )}
      </Query>
    );
  }
}
export default MatchesContainer;
