import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Screen, View } from '@shoutem/ui';
import Login from './Login';
import SignUp from './SignUp';
import CloseButton from '../CloseButton';
import Tabs from '../Tabs';

class Auth extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  state = {
    selectedTab: 0,
  };

  tabs = [
    {
      title: 'login',
    },
    {
      title: 'signUp',
    },
  ];

  changeTab = selectedTab => {
    this.setState({ selectedTab });
  };

  render() {
    const { onClose } = this.props;
    const { selectedTab } = this.state;
    return (
      <Screen>
        <View styleName="vertical">
          <Tabs
            tabs={this.tabs}
            styleName="h-center lg-gutter xl-gutter-right xl-gutter-left"
            onTabChange={this.changeTab}
            selectedTab={selectedTab}
          />

          <CloseButton onClose={onClose} />
          {selectedTab === 0 && <Login />}
          {selectedTab === 1 && <SignUp />}
        </View>
      </Screen>
    );
  }
}

export default Auth;
