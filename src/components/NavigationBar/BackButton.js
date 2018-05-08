import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '@shoutem/ui';

function BackButton({ navigator }) {
  return (
    <Button onPress={() => navigator.pop()}>
      <Icon name="back" />
    </Button>
  );
}

BackButton.propTypes = {
  navigator: PropTypes.shape({
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default BackButton;
