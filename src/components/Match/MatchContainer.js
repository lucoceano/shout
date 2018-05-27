import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Match from './Match';
import matchFragment from '../../graphql/fragments/match';

const pollingInterval = 5000;
const matcheQuery = gql`
  query match($id: String!) {
    match(id: $id) {
      ...match
    }
  }
  ${matchFragment}
`;

function MatchContainer(props) {
  return (
    <Query
      query={matcheQuery}
      variables={{ id: props.match.id }}
      networkPolicy="cache-network"
      pollInterval={pollingInterval}
    >
      {({ data: { match } = {} }) => <Match {...props} match={match || props.match} />}
    </Query>
  );
}

MatchContainer.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

MatchContainer.path = 'com.lucoceano.Match';

export default MatchContainer;
