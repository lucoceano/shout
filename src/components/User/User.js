import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@shoutem/ui';
import Login from '../Login';

function User({ loading, user }) {
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (user) {
    return <Text>{user.name}</Text>;
  }

  return <Login />;
}

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.shape({}),
};

User.defaultProps = {
  user: undefined,
};

export default User;
