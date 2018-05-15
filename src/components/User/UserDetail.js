import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Button, Text, View, Subtitle, Row, Icon, Divider } from '@shoutem/ui';
import { FormattedMessage } from 'react-intl';
import UserAvatar from './UserAvatar';

function UserDetail({ user, onLogout, onLeaderboard }) {
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
            <Text>
              <FormattedMessage id="leaderboard" />
            </Text>
            <Icon styleName="disclosure" name="right-arrow" />
          </Row>
        </TouchableOpacity>
        <Divider styleName="line" />
      </View>

      <Button styleName="secondary lg-gutter" onPress={onLogout}>
        <Text>
          <FormattedMessage id="logout" />
        </Text>
      </Button>
    </View>
  );
}

UserDetail.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onLeaderboard: PropTypes.func.isRequired,
  user: PropTypes.shape({}).isRequired,
};

export default UserDetail;
