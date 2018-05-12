import React from 'react';
import { View, Spinner, Text } from '@shoutem/ui';

export default function Loading() {
  return (
    <View
      styleName="center lg-gutter-bottom"
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}
    >
      <Spinner />
      <Text styleName="sm-gutter">Loading...</Text>
    </View>
  );
}
