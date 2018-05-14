import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import Emoji from 'react-native-emoji';
import { View, Text, Caption } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';
import moment from 'moment-timezone';
import Team from './Team';

const defaultFlagSize = 75;
const proportion = Dimensions.get('window').width / 375;

class MatchInfo extends Component {
  renderTeams = () => {
    const { match, style } = this.props;
    return (
      <View styleName="horizontal v-center h-center" style={style.container}>
        <Team team={match.teams.home}>
          {team => (
            <View styleName="horizontal v-center">
              <Text style={style.flag}>
                <Emoji name={team.emoji} />
              </Text>
              <Text style={style.score}>{match.score.home}</Text>
            </View>
          )}
        </Team>
        <Text>x</Text>
        <Team team={match.teams.away}>
          {team => (
            <View styleName="horizontal v-center">
              <Text style={style.score}>{match.score.away}</Text>
              <Text style={style.flag}>
                <Emoji name={team.emoji} />
              </Text>
            </View>
          )}
        </Team>
      </View>
    );
  };

  renderNoTeams = () => {
    const { style } = this.props;
    return (
      <View styleName="horizontal v-center h-center" style={style.container}>
        <View styleName="horizontal v-center">
          <Text style={style.flag}>
            <Emoji name="grey_question" />
          </Text>
        </View>
        <Text>x</Text>
        <View styleName="horizontal v-center">
          <Text style={style.flag}>
            <Emoji name="grey_question" />
          </Text>
        </View>
      </View>
    );
  };

  render() {
    const { match, style } = this.props;

    return (
      <View style={style.root}>
        <View styleName="vertical h-center">
          <Caption>{`Match ${match.number}`}</Caption>

          {match.teams && this.renderTeams()}
          {!match.teams && this.renderNoTeams()}

          <View styleName="vertical h-center">
            <Text style={style.info}>{moment(match.date).format('LLLL')}</Text>
            <Text style={style.info}>{match.location}</Text>
          </View>
        </View>
      </View>
    );
  }
}

MatchInfo.propTypes = {
  match: PropTypes.shape({}).isRequired,
  style: PropTypes.shape({}).isRequired,
};

const styles = {
  root: {
    margin: 8 * proportion,
    padding: 8 * proportion,
    elevation: 1,
    backgroundColor: '#ffffff',
  },
  flag: {
    paddingLeft: 16 * proportion,
    paddingRight: 16 * proportion,
    fontSize: defaultFlagSize * proportion,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    padding: 8,
    fontSize: 36,
    width: 55,
    textAlign: 'center',
  },
  info: {
    padding: 2,
  },
};

export default connectStyle('com.lucoceano.Match', styles)(MatchInfo);
