import { Navigation } from 'react-native-navigation';
import Root from '../';
import Match from '../components/Match';

const defaultNavigatorStyle = {
  navBarHidden: true,
};

const registerScreen = (name, component, styles = {}) => {
  component.navigatorStyle = { ...defaultNavigatorStyle, ...styles };
  Navigation.registerComponent(name, () => component);
};

export default function registerScreens() {
  registerScreen('com.lucoceano.App', Root);
  registerScreen(Match.path, Match);
}
