import DeviceInfo from 'react-native-device-info';
import moment from 'moment-timezone';

import 'moment/src/locale/pt';

const deviceTimezone = DeviceInfo.getTimezone();
const deviceLocale = DeviceInfo.getDeviceLocale();
moment.locale([deviceLocale, 'pt']);
moment.tz.setDefault(deviceTimezone);
