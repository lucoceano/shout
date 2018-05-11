import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Screen, View, Text } from '@shoutem/ui';
import Matches from '../Matches';
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
    const { navigator } = this.props;
    navigator.showModal({
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
        <Header
          onUserClick={this.onUserClick}
          onTabChange={this.onChangeTab}
          initialTab={selectedTab}
        />

        {selectedTab === 0 && <Matches navigator={navigator} />}
        {selectedTab === 1 && (
          <View>
            <Text>Groups</Text>
          </View>
        )}
      </Screen>
    );
  }
}

export default App;
