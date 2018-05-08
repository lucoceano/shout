import React from 'react';
import PropTypes from 'prop-types';
import { Text, ListView } from '@shoutem/ui';
import Match from './Match';

export default function Matches({ loading, matches, error }) {
  if (error) {
    return <Text>Sorry somethin is wrong...</Text>;
  }

  return <ListView data={matches} loading={loading} renderRow={match => <Match match={match} />} />;
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
