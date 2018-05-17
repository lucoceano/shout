import DeviceInfo from 'react-native-device-info';
import { Text } from 'react-native';
import pt from 'react-intl/locale-data/pt';
import en from 'react-intl/locale-data/en';
import { addLocaleData } from 'react-intl';
import moment from 'moment-timezone';
import 'moment/src/locale/pt';

import countries from './countries';
import messages from './messages';
import formats from './formats';

addLocaleData([...pt, ...en]);

const deviceLocale = DeviceInfo.getDeviceLocale().slice(0, 2);
const supportedLocales = ['en', 'pt'];
const selectedLocale = supportedLocales.includes(deviceLocale) ? deviceLocale : 'pt';

moment.locale([selectedLocale, 'pt']);
moment.tz.setDefault(DeviceInfo.getTimezone());

function getLocalizedObject(object, locale, depth = 0) {
  return Object.keys(object).reduce(
    (localized, key) => ({
      ...localized,
      [key]: depth ? getLocalizedObject(object[key], locale, depth - 1) : object[key][locale],
    }),
    {},
  );
}

export default {
  locale: selectedLocale,
  textComponent: Text,
  messages: getLocalizedObject(messages, selectedLocale),
  formats: getLocalizedObject(formats, selectedLocale, 1),
  countries: countries[selectedLocale],
};
