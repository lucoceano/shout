import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
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

export default function MatchesContainer() {
  return (
    <Query query={matchesQuery} pollInterval={pollingInterval}>
      {({ loading, data: { matches } = {}, error }) => (
        <Matches loading={loading} error={error} matches={matches} />
      )}
    </Query>
  );
}
