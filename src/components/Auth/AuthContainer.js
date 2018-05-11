import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import Auth from './Auth';

class AuthContainer extends Component {
  static path = 'com.lucoceano.Auth';

  close = () => {
    console.log('sdasda')
    Navigation.dismissModal();
  };

  render() {
    return <Auth onClose={this.close} />;
  }
}

export default AuthContainer;
