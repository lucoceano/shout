import React from 'react';
import PropTypes from 'prop-types';
import { Screen, NavigationBar, Button, Text } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';
import CloseButton from '../CloseButton';

function UserDetail({ user, style, onLogout, onClose }) {
  return (
    <Screen>
      <NavigationBar
        styleName="inline"
        title={user.name}
        rightComponent={<CloseButton onClose={onClose} disableGutter />}
      />
      <Button style={style.button} styleName="secondary" onPress={onLogout}>
        <Text>Logout</Text>
      </Button>
    </Screen>
  );
}

UserDetail.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  style: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}).isRequired,
};

const styles = {
  button: {
    margin: 16,
  },
};

export default connectStyle('com.lucoceano.UserDetail', styles)(UserDetail);
