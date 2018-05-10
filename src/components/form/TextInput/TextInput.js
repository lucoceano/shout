import React from 'react';
import { TextInput as UITextInput, View } from '@shoutem/ui';

function TextInput(props) {
  const { input, ...inputProps } = props;

  return (
    <View>
      <UITextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={String(input.value)}
      />
    </View>
  );
}

export default TextInput;
