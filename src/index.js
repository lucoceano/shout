import { Navigation } from 'react-native-navigation';
import createClient from './graphql/createClient';
import createStore from './redux/createStore';
import registerScreens from './screens';
import './intl';

const apiURL = 'https://shout-server.herokuapp.com/graphql';
const client = createClient(apiURL);

const store = createStore();

registerScreens(client, store);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'com.lucoceano.App',
  },
});


