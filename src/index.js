import { Navigation } from 'react-native-navigation';
import createClient from './graphql/createClient';
import createStore from './redux/createStore';
import registerScreens from './screens';
import intl from './intl';

// const apiURL = 'https://shout-server.herokuapp.com/graphql';
const apiURL = 'http://localhost:3000/graphql';
const client = createClient(apiURL);

const store = createStore();

registerScreens(client, store, intl);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'com.lucoceano.App',
  },
});


