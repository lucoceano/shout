import React from 'react';
import { NavigationBar, Button, Icon } from '@shoutem/ui';

export default function Header({ onUserClick }) {
  return (
    <NavigationBar
      styleName="inline"
      title="Shout!"
      rightComponent={
        <Button onPress={onUserClick}>
          <Icon name="user-profile" />
        </Button>
      }
    />
  );
}
