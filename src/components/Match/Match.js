import React from 'react';
import PropTypes from 'prop-types';
import { Text, Screen, NavigationBar } from '@shoutem/ui';
import { BackButton } from '../NavigationBar';

function Match({ match, navigator }) {
  return (
    <Screen>
      <NavigationBar
        title={`Match ${match.number}`}
        leftComponent={<BackButton navigator={navigator} />}
      />
      <Text>{match.code}</Text>
    </Screen>
  );
}

Match.propTypes = {
  match: PropTypes.shape({}).isRequired,
  navigator: PropTypes.shape({}).isRequired,
};

Match.path = 'com.lucoceano.Match';

export default Match;
