import React from 'react';
import PropTypes from 'prop-types';
import { ListView } from '@shoutem/ui';
import MatchRow from './MatchRow';

export default function Matches({ loading, matches, onItemClick }) {
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
};

Matches.defaultProps = {
  matches: [],
};
