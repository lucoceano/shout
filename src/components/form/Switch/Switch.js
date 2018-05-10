import React from 'react';
import { Switch as UISwitch, View } from '@shoutem/ui';

function Switch(props) {
  const { input, ...inputProps } = props;

  return (
    <View>
      <UISwitch
        {...inputProps}
        onValueChange={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={Boolean(input.value)}
      />
    </View>
  );
}

export default Switch;
