import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@shoutem/ui';
import UserDetail from './UserDetail';
import Auth from '../Auth';

function User({ loading, user, onLogout, onClose }) {
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (user) {
    return <UserDetail user={user} onLogout={onLogout} onClose={onClose} />;
  }

  return <Auth />;
}

User.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.shape({}),
};

User.defaultProps = {
  user: undefined,
};

export default User;
