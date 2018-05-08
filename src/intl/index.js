import DeviceInfo from 'react-native-device-info';
import moment from 'moment-timezone';

import 'moment/src/locale/pt';

moment.locale([DeviceInfo.getDeviceLocale(), 'pt']);
moment.tz.setDefault(DeviceInfo.getTimezone());
