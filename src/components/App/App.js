import React from 'react';
import PropTypes from 'prop-types';
import { Screen } from '@shoutem/ui';
import Matches from '../Matches';
import Header from '../Header';

function App({ navigator }) {
  return (
    <Screen>
      <Header />
      <Matches navigator={navigator} />
    </Screen>
  );
}

App.propTypes = {
  navigator: PropTypes.shape({}).isRequired,
};

export default App;
