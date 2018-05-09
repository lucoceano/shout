import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from '@shoutem/ui';
import { MatchInfo } from '../Match';

export default function MatchRow({ match, onClick }) {
  return (
    <TouchableOpacity onPress={() => onClick(match)}>
      <MatchInfo match={match} />
    </TouchableOpacity>
  );
}

MatchRow.propTypes = {
  match: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func.isRequired,
};
