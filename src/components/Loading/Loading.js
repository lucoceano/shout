import React from 'react';
import { View, Spinner, Text } from '@shoutem/ui';
import { FormattedMessage } from 'react-intl';

export default function Loading() {
  return (
    <View
      styleName="center lg-gutter-bottom"
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}
    >
      <Spinner />
      <Text styleName="sm-gutter">
        <FormattedMessage id="loadingEllipsis" />
      </Text>
    </View>
  );
}
