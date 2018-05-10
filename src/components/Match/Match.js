import React from 'react';
import PropTypes from 'prop-types';
import { View, Screen, NavigationBar, Caption } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';
import { BackButton } from '../NavigationBar';
import MatchInfo from './MatchInfo';
import Bet from '../Bet';

function Match({ match, navigator, style }) {
  return (
    <Screen>
      <NavigationBar
        title={`Match ${match.number}`}
        styleName="inline"
        leftComponent={<BackButton navigator={navigator} />}
      />
      <View styleName="vertical v-center h-center" style={style.info}>
        <Caption>INFORMATION</Caption>
      </View>
      <MatchInfo match={match} />
      <View styleName="vertical v-center h-center" style={style.info}>
        <Caption>BET</Caption>
      </View>
      <Bet match={match} />
    </Screen>
  );
}

Match.propTypes = {
  match: PropTypes.shape({}).isRequired,
  style: PropTypes.shape({}).isRequired,
  navigator: PropTypes.shape({}).isRequired,
};

const styles = {
  info: {
    padding: 16,
  },
};

export default connectStyle('com.lucoceano.Match', styles)(Match);
