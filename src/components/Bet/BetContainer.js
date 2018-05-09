import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Bet from './Bet';

const betQuery = gql`
  query bet($matchId: String!) {
    bet(matchId: $matchId) {
      id
      score {
        home
        away
      }
    }
  }
`;

function BetContainer(props) {
  const { match } = props;
  return (
    <Query query={betQuery} variables={{ matchId: match.id }}>
      {({ loading, data: { bet } = {}, error }) => (
        <Bet loading={loading} error={error} bet={bet} />
      )}
    </Query>
  );
}

BetContainer.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default BetContainer;
