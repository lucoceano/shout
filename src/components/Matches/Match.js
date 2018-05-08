import React from 'react';
import PropTypes from 'prop-types';
import Emoji from 'react-native-emoji';
import { View, Text, TouchableOpacity } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';
import moment from 'moment-timezone';
import MatchTeam from './MatchTeam';

function Match({ match, style }) {
  return (
    <TouchableOpacity style={style.root}>
      <View styleName="vertical h-center">
        <Text>{`Match ${match.number}`}</Text>
        <View styleName="horizontal v-center h-center">
          <MatchTeam team={match.teams.home}>
            {team => (
              <View styleName="horizontal v-center">
                <Text style={{ fontSize: 50 }}>
                  <Emoji name={team.emoji} />
                </Text>
                <Text>{match.score.home}</Text>
              </View>
            )}
          </MatchTeam>
          <Text>x</Text>
          <MatchTeam team={match.teams.away}>
            {team => (
              <View styleName="horizontal v-center">
                <Text>{match.score.away}</Text>
                <Text style={{ fontSize: 50 }}>
                  <Emoji name={team.emoji} />
                </Text>
              </View>
            )}
          </MatchTeam>
        </View>
        <View styleName="vertical h-center">
          <Text>{moment(match.date).format('LLLL')}</Text>
          <Text>{match.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

Match.propTypes = {
  match: PropTypes.shape({}).isRequired,
  style: PropTypes.shape({}).isRequired,
};

const styles = {
  root: {
    margin: 16,
    padding: 16,
    backgroundColor: '#ffffff',
  },
};

export default connectStyle('shoutem.ui.View', styles)(Match);
