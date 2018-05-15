import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { IntlProvider } from 'react-intl';
import { Navigation } from 'react-native-navigation';
import App from '../components/App';
import Match from '../components/Match';
import User from '../components/User';
import Auth from '../components/Auth';
import Leaderboard from '../components/Leaderboard';

const defaultNavigatorStyle = {
  navBarHidden: true,
};

const components = [App, Match, User, Auth, Leaderboard];

const withProviders = (WrappedComponent, client, store, intl) => {
  function Enhance(props) {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <IntlProvider {...intl}>
            <WrappedComponent {...props} />
          </IntlProvider>
        </ApolloProvider>
      </Provider>
    );
  }
  return Enhance;
};

const registerScreen = (client, store, intl, component, styles = {}) => {
  const Component = withProviders(component, client, store, intl);
  Component.navigatorStyle = { ...defaultNavigatorStyle, ...styles };

  Navigation.registerComponent(component.path, () => Component);
};

export default function registerScreens(client, store, intl) {
  components.forEach(component => registerScreen(client, store, intl, component));
}
