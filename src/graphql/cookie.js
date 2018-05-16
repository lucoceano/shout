import { AsyncStorage } from 'react-native';
import CookieManager from 'react-native-cookies';

const storeKey = '@cookie:cookie';
let url;

export async function init(apiUrl) {
  url = apiUrl;
  CookieManager.clearAll();
}

export const jsonToStringCookie = cookieJson =>
  Object.keys(cookieJson)
    .map(title => `${title}=${cookieJson[title]}`)
    .join(',');

export async function storeCookie() {
  const res = await CookieManager.get(url);
  await AsyncStorage.setItem(storeKey, JSON.stringify(res));
  await CookieManager.clearAll();
}

export async function retrieveCookie() {
  const cookie = await AsyncStorage.getItem(storeKey);
  if (!cookie) {
    return null;
  }
  return jsonToStringCookie(JSON.parse(cookie));
}

export async function clearCookie() {
  await AsyncStorage.removeItem(storeKey);
}
