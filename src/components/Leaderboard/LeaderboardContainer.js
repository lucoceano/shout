import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Leaderboard from './Leaderboard';

const leaderboardQuery = gql`
  query leaderboard {
    leaderboard {
      user {
        id
        name
        email
      }
      points
      position
    }
  }
`;

function LeaderboardContainer(props) {
  return (
    <Query query={leaderboardQuery} networkPolicy="network-only">
      {({ loading, data: { leaderboard } = {} }) => (
        <Leaderboard
          {...props}
          loading={loading}
          leaderboard={leaderboard}
          onBack={() => props.navigator.pop()}
        />
      )}
    </Query>
  );
}

LeaderboardContainer.propTypes = {
  navigator: PropTypes.shape({
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

LeaderboardContainer.path = 'com.lucoceano.Leaderboard';

export default LeaderboardContainer;
