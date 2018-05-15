import React from 'react';
import PropTypes from 'prop-types';
import { Switch as UISwitch, View } from '@shoutem/ui';

function Switch({ input, ...inputProps }) {
  return (
    <View>
      <UISwitch
        {...inputProps}
        onValueChange={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
    </View>
  );
}

Switch.propTypes = {
  input: PropTypes.shape({}).isRequired,
};

export default Switch;
