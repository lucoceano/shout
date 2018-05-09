import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Screen } from '@shoutem/ui';
import Matches from '../Matches';
import Header from '../Header';
import User from '../User';

class App extends Component {
  static path = 'com.lucoceano.App';
  static propTypes = {
    navigator: PropTypes.shape({}).isRequired,
  };

  onUserClick = () => {
    const { navigator } = this.props;
    navigator.showModal({
      screen: User.path,
    });
  };

  render() {
    const { navigator } = this.props;
    return (
      <Screen>
        <Header onUserClick={this.onUserClick} />
        <Matches navigator={navigator} />
      </Screen>
    );
  }
}

export default App;
