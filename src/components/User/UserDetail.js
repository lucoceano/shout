import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Button, Text, View, Subtitle, Row, Icon, Divider } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';
import UserAvatar from './UserAvatar';

function UserDetail({ user, style, onLogout, onLeaderboard }) {
  return (
    <View styleName="vertical">
      <View styleName="md-gutter vertical v-center h-center">
        <UserAvatar user={user} />
        <Subtitle styleName="md-gutter">{user.name}</Subtitle>
      </View>

      <View styleName="md-gutter vertical">
        <TouchableOpacity onPress={() => onLeaderboard()}>
          <Row styleName="small">
            <Icon name="web" />
            <Text>Leaderboard</Text>
            <Icon styleName="disclosure" name="right-arrow" />
          </Row>
        </TouchableOpacity>
        <Divider styleName="line" />
        <Row styleName="small">
          <Icon name="about" />
          <Text>Sobre</Text>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>
      </View>

      <Button style={style.button} styleName="secondary" onPress={onLogout}>
        <Text>Logout</Text>
      </Button>
    </View>
  );
}

UserDetail.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onLeaderboard: PropTypes.func.isRequired,
  style: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}).isRequired,
};

const styles = {
  button: {
    margin: 16,
  },
};

export default connectStyle('com.lucoceano.UserDetail', styles)(UserDetail);
