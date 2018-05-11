import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { Navigation } from 'react-native-navigation';
import App from '../components/App';
import Match from '../components/Match';
import User from '../components/User';
import Auth from '../components/Auth';

const defaultNavigatorStyle = {
  navBarHidden: true,
};

const components = [App, Match, User, Auth];

const withApollo = (WrappedComponent, client, store) => {
  function Enhance(props) {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <WrappedComponent {...props} />
        </ApolloProvider>
      </Provider>
    );
  }
  return Enhance;
};

const registerScreen = (client, store, component, styles = {}) => {
  const Component = withApollo(component, client, store);
  Component.navigatorStyle = { ...defaultNavigatorStyle, ...styles };

  Navigation.registerComponent(component.path, () => Component);
};

export default function registerScreens(client, store) {
  components.forEach(component => registerScreen(client, store, component));
}
