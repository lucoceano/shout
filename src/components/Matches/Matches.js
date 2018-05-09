import React from 'react';
import PropTypes from 'prop-types';
import { Text, ListView } from '@shoutem/ui';
import MatchRow from './MatchRow';

export default function Matches({ loading, matches, error, onItemClick }) {
  if (error) {
    return <Text>Sorry something is wrong</Text>;
  }

  return (
    <ListView
      data={matches}
      loading={loading}
      renderRow={match => <MatchRow match={match} onClick={onItemClick} />}
    />
  );
}

Matches.propTypes = {
  loading: PropTypes.bool.isRequired,
  onItemClick: PropTypes.func.isRequired,
  matches: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.shape({}),
};

Matches.defaultProps = {
  matches: [],
  error: undefined,
};
