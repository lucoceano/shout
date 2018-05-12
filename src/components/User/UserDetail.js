import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View, Image, Subtitle } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';
import md5 from 'crypto-js/md5';

function UserDetail({ user, style, onLogout }) {
  return (
    <View styleName="vertical">
      <View styleName="md-gutter vertical v-center h-center">
        <Image
          styleName="medium-avatar md-gutter"
          source={{ uri: `https://www.gravatar.com/avatar/${md5(user.email.toLowerCase())}?s=200` }}
        />
        <Subtitle styleName="md-gutter">{user.name}</Subtitle>
      </View>

      <Button style={style.button} styleName="secondary" onPress={onLogout}>
        <Text>Logout</Text>
      </Button>
    </View>
  );
}

UserDetail.propTypes = {
  onLogout: PropTypes.func.isRequired,
  style: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}).isRequired,
};

const styles = {
  button: {
    margin: 16,
  },
};

export default connectStyle('com.lucoceano.UserDetail', styles)(UserDetail);
