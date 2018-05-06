import React from 'react';
import { Query } from 'react-apollo';
import { Text } from 'react-native';
import gql from 'graphql-tag';

const matchesQuery = gql`
  query matches {
    matches {
      teams {
        home {
          code
        }
        away {
          code
        }
      }
    }
  }
`;

export default function MatchesContainer() {
  return (
    <Query query={matchesQuery}>
      {({ loading, data: { matches } = {} }) => {
        if (loading) {
          return <Text>Loading...</Text>;
        }

        return matches.map(match => (
          <Text>
            `${match.teams.home.code} x ${match.teams.away.code}`
          </Text>
        ));
      }}
    </Query>
  );
}
