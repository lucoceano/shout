import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import Emoji from 'react-native-emoji';
import { View, Text, Caption } from '@shoutem/ui';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { connectStyle } from '../../style';
import Team from './Team';
import intl from '../../intl';

const defaultFlagSize = 64;
const proportion = Dimensions.get('window').width / 375;

class MatchInfo extends Component {
  renderTeams = () => {
    const { match, style } = this.props;
    return (
      <View styleName="horizontal v-center h-center" style={style.container}>
        <Team team={match.teams.home}>
          {team => (
            <View styleName="sm-gutter">
              <View styleName="horizontal v-center">
                <Text style={style.flag} styleName="h-center">
                  <Emoji name={team.emoji} />
                </Text>
                <Text style={style.score}>{match.score.home}</Text>
              </View>
              <Text style={style.country} styleName="v-center h-center" numberOfLines={1}>
                {intl.countries[team.code.toUpperCase()]}
              </Text>
            </View>
          )}
        </Team>
        <Text>x</Text>
        <Team team={match.teams.away}>
          {team => (
            <View styleName="sm-gutter">
              <View styleName="horizontal v-center">
                <Text style={style.score}>{match.score.away}</Text>
                <Text style={style.flag} styleName="h-center">
                  <Emoji name={team.emoji} />
                </Text>
              </View>
              <Text
                style={{ ...style.country, alignSelf: 'flex-end' }}
                styleName="v-center h-center"
                numberOfLines={1}
              >
                {intl.countries[team.code.toUpperCase()]}
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
          <Text style={style.noFlag}>
            <Emoji name="grey_question" />
          </Text>
        </View>
        <Text>x</Text>
        <View styleName="horizontal v-center">
          <Text style={style.noFlag}>
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
          <Caption>
            <FormattedMessage id="matchNumber" values={{ number: match.number }} />
          </Caption>

          {match.teams && this.renderTeams()}
          {!match.teams && this.renderNoTeams()}

          <View styleName="vertical h-center">
            <Text style={style.info}>
              <FormattedDate value={match.date} format="matchDay" />
            </Text>
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

const styles = variables => ({
  root: {
    margin: 8 * proportion,
    padding: 8 * proportion,
    elevation: 1,
    backgroundColor: '#ffffff',
  },
  flag: {
    paddingLeft: variables.smallGutter * proportion,
    paddingRight: variables.smallGutter * proportion,
    fontSize: defaultFlagSize * proportion,
    width: 96,
  },
  noFlag: {
    padding: variables.mediumGutter * proportion,
    fontSize: variables.largeGutter * proportion,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    padding: variables.smallGutter,
    fontSize: 36,
    width: 55,
    textAlign: 'center',
  },
  country: {
    width: 96,
  },
  info: {
    padding: 2,
  },
});

export default connectStyle('com.lucoceano.MatchInfo', styles)(MatchInfo);
