import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from '@shoutem/ui';

export default function MatchTeam({ team, children }) {
  return (
    <View styleName="vertical h-center">
      {children(team)}
      <Text>{`${team.code}`}</Text>
    </View>
  );
}

MatchTeam.propTypes = {
  team: PropTypes.shape({}).isRequired,
  children: PropTypes.func,
};

MatchTeam.defaultProps = {
  children: () => {},
};
