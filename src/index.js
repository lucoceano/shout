import 'intl';
import { Platform } from 'react-native';
import { Navigation, NativeEventsReceiver } from 'react-native-navigation';
import createClient from './graphql/createClient';
import createStore from './redux/createStore';
import registerScreens from './screens';
import intl from './intl';
import './lib/polyfill';

const apiURL = 'https://shout-server.herokuapp.com/graphql';
const client = createClient(apiURL);

console.disableYellowBox = true;

const store = createStore();

registerScreens(client, store, intl);

function startApp() {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'com.lucoceano.App',
    },
  });
}

if (Platform.OS === 'ios') {
  startApp();
} else {
  Navigation.isAppLaunched().then(appLaunched => {
    if (appLaunched) {
      startApp();
    }
    new NativeEventsReceiver().appLaunched(startApp);
  });
}
