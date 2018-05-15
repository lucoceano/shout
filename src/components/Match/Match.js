import React from 'react';
import PropTypes from 'prop-types';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, Screen, NavigationBar, Caption } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';
import { FormattedMessage } from 'react-intl';
import { BackButton } from '../NavigationBar';
import MatchInfo from './MatchInfo';
import Bet from '../Bet';

function Match({ match, navigator, style }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Screen>
        <NavigationBar
          title={`Match ${match.number}`}
          styleName="inline"
          leftComponent={<BackButton navigator={navigator} />}
        />
        <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false}>
          <View styleName="vertical v-center h-center" style={style.info}>
            <Caption>
              <FormattedMessage id="information" />
            </Caption>
          </View>
          <MatchInfo match={match} />
          <View styleName="vertical v-center h-center" style={style.info}>
            <Caption>
              <FormattedMessage id="bet" />
            </Caption>
          </View>
          <Bet match={match} />
        </KeyboardAwareScrollView>
      </Screen>
    </TouchableWithoutFeedback>
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
