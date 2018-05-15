import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { View, Text, Title, Screen, NavigationBar } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';
import { FormattedMessage } from 'react-intl';
import { UserAvatar } from '../User';
import Loading from '../Loading';
import { BackButton } from '../NavigationBar';
import LeaderboardRow from './LeaderboardRow';

function Leaderboard({ user, loading, leaderboard, navigator, style }) {
  return (
    <Screen>
      <View styleName="md-gutter" style={style.header}>
        <View styleName="horizontal v-center h-center md-gutter lg-gutter-top">
          <Text styleName="h-center" style={style.userIndicator}>
            <FormattedMessage
              id="positionNumber"
              values={{ position: user.leaderboard.position }}
            />
          </Text>
          <UserAvatar user={user} />
          <Text styleName="h-center" style={style.userIndicator}>
            <FormattedMessage id="pointsNumber" values={{ points: user.leaderboard.points }} />
          </Text>
        </View>
      </View>
      <NavigationBar
        styleName="clear"
        centerComponent={
          <Title>
            <FormattedMessage id="leaderboard" />
          </Title>
        }
        leftComponent={<BackButton navigator={navigator} iconStyle={{ color: '#FFFFFF' }} />}
      />
      {loading && <Loading />}
      {!loading && (
        <FlatList
          data={leaderboard}
          loading={loading}
          renderItem={({ item, index }) => (
            <LeaderboardRow loaderboad={item} odd={index % 2 === 0} />
          )}
        />
      )}
    </Screen>
  );
}

Leaderboard.propTypes = {
  user: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  leaderboard: PropTypes.arrayOf(PropTypes.shape({})),
  navigator: PropTypes.shape({}).isRequired,
  style: PropTypes.shape({}).isRequired,
};

Leaderboard.defaultProps = {
  leaderboard: [],
};

const styles = {
  userIndicator: {
    color: 'white',
    fontSize: 25,
    flex: 1,
  },
  header: {
    backgroundColor: '#119abf',
    paddingTop: 35,
    alignItems: 'center',
    elevation: 1,
  },
};

export default connectStyle('com.lucoceano.Leaderboard', styles)(Leaderboard);
