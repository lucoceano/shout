import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';

function CloseButton({ style, styleName, onClose, disableGutter }) {
  const styling = disableGutter ? {} : { style: style.close };
  return (
    <Button styleName={styleName} onPress={onClose} {...styling}>
      <Icon name="close" />
    </Button>
  );
}

CloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
  style: PropTypes.shape({}).isRequired,
  disableGutter: PropTypes.bool,
  styleName: PropTypes.string,
};

CloseButton.defaultProps = {
  disableGutter: false,
  styleName: 'clear',
};

const styles = {
  close: {
    alignSelf: 'flex-end',
    marginTop: 16,
    padding: 8,
    position: 'absolute',
  },
};

export default connectStyle('com.lucoceano.CloseButton', styles)(CloseButton);
