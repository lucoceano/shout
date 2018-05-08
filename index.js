import { Navigation } from 'react-native-navigation';
import registerScreens from './src/screens';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'com.lucoceano.App',
  },
});

// AppRegistry.registerComponent('shout', () => App);
