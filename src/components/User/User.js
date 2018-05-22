import React from 'react';
import PropTypes from 'prop-types';
import { Screen, NavigationBar, View } from '@shoutem/ui';
import CloseButton from '../CloseButton';
import UserDetail from './UserDetail';
import Loading from '../Loading';
import Auth from '../Auth';

function User({ loading, user, onLogout, onClose, onLeaderboard }) {
  if (loading) {
    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Loading />
      </View>
    );
  }

  if (!user && !loading) {
    return <Auth />;
  }

  return (
    <Screen>
      <NavigationBar
        styleName="inline"
        title="Profile"
        rightComponent={<CloseButton onClose={onClose} disableGutter />}
      />
      {!loading && <UserDetail user={user} onLogout={onLogout} onLeaderboard={onLeaderboard} />}
    </Screen>
  );
}

User.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onLeaderboard: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.shape({}),
};

User.defaultProps = {
  user: undefined,
};

export default User;
