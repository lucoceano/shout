import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Screen } from '@shoutem/ui';
import { Navigation } from 'react-native-navigation';
import { StatusBar } from 'react-native';
import Matches from '../Matches';
import Groups from '../Groups';
import Header from '../Header';
import User from '../User';

class App extends Component {
  static path = 'com.lucoceano.App';
  static propTypes = {
    navigator: PropTypes.shape({}).isRequired,
  };

  state = {
    selectedTab: 0,
  };

  onUserClick = () => {
    Navigation.showModal({
      screen: User.path,
    });
  };

  onChangeTab = selectedTab => {
    this.setState({ selectedTab });
  };

  render() {
    const { navigator } = this.props;
    const { selectedTab } = this.state;
    return (
      <Screen>
        <StatusBar backgroundColor="#000000" />
        <Header
          onUserClick={this.onUserClick}
          onTabChange={this.onChangeTab}
          initialTab={selectedTab}
        />

        {selectedTab === 0 && <Matches navigator={navigator} />}
        {selectedTab === 1 && <Groups />}
      </Screen>
    );
  }
}

export default App;
