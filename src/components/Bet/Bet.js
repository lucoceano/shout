import React from 'react';
import PropTypes from 'prop-types';
import { View } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';

function Bet({ style }) {
  return (
    <View style={style.root}>
      <View styleName="vertical h-center" />
    </View>
  );
}

Bet.propTypes = {
  style: PropTypes.shape({}).isRequired,
};

const styles = {
  root: {
    margin: 8,
    padding: 16,
    elevation: 1,
    backgroundColor: '#ffffff',
  },
};

export default connectStyle('com.lucoceano.Match', styles)(Bet);
