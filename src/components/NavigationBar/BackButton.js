import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '@shoutem/ui';

function BackButton({ navigator, iconStyle }) {
  return (
    <Button onPress={() => navigator.pop()}>
      <Icon name="back" style={iconStyle} />
    </Button>
  );
}

BackButton.propTypes = {
  navigator: PropTypes.shape({
    pop: PropTypes.func.isRequired,
  }).isRequired,
  iconStyle: PropTypes.shape({}).isRequired,
};

export default BackButton;
