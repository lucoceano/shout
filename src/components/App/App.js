import React from 'react';
import { Screen } from '@shoutem/ui';
import Matches from '../Matches';
import Header from '../Header';

export default function App() {
  return (
    <Screen>
      <Header />
      <Matches />
    </Screen>
  );
}
