import React from 'react';
import PropTypes from 'prop-types';
import { Text, ListView } from '@shoutem/ui';
import Match from './Match';

export default function Matches({ loading, matches, error, onItemClick }) {
  if (error) {
    return <Text>Sorry something is wrong</Text>;
  }

  return (
    <ListView
      data={matches}
      loading={loading}
      renderRow={match => <Match match={match} onClick={onItemClick} />}
    />
  );
}

Matches.propTypes = {
  loading: PropTypes.bool.isRequired,
  matches: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.shape({}),
};

Matches.defaultProps = {
  matches: [],
  error: undefined,
};
