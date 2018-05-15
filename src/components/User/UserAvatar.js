import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '@shoutem/ui';
import md5 from 'crypto-js/md5';

function UserAvatar({ user, styleName }) {
  return (
    <Image
      styleName={`md-gutter ${styleName}`}
      source={{ uri: `https://www.gravatar.com/avatar/${md5(user.email.toLowerCase())}?s=200` }}
    />
  );
}

UserAvatar.propTypes = {
  user: PropTypes.shape({}).isRequired,
  styleName: PropTypes.string,
};

UserAvatar.defaultProps = {
  styleName: 'medium-avatar',
};

export default UserAvatar;
