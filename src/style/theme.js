import { getTheme } from '@shoutem/ui';

export const colors = {
  midnightBlue: '#2c3e50',
  wetAsphalt: '#34495e',
  clouds: '#ecf0f1',
  nephritis: '#27ae60',
  carrot: '#e67e22',
  sunFlower: '#f1c40f',
  belizeHole: '#2980b9',
  white: '#EDEDED',
};

export const variables = {
  featuredColor: '#659CEC',
  backgroundColor: '#f2f2f2',
  paperColor: '#FFFFFF',
  shadowColor: 'rgba(0, 0, 0, 0.1)',

  heading: {
    fontFamily: 'Rubik-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#222222',
    fontSize: 25,
  },
  title: {
    fontFamily: 'Rubik-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    color: '#222222',
  },
  subtitle: {
    fontFamily: 'Rubik-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#222222',
    fontSize: 15,
  },
  caption: {
    fontFamily: 'Rubik-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    color: '#666666',
  },
  text: {
    fontFamily: 'Rubik-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    color: '#666666',
  },

  imageOverlayColor: 'rgba(0, 0, 0, 0.2)',
  imageOverlayTextColor: '#FFFFFF',
  tagOverlayColor: 'rgba(0, 0, 0, 0.7)',
  tagOverlayTextColor: '#FFFFFF',

  navBarBackground: colors.nephritis,
  navBarBorderColor: '#f2f2f2',
  navBarText: {
    fontFamily: 'Rubik-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: colors.white,
    fontSize: 15,
  },
  navBarIconsColor: colors.midnightBlue,
  featuredNavBarTitleColor: '#ffffff',
  featuredNavBarIconsColor: '#ffffff',

  mainNavBackground: '#FFFFFF',
  mainNavItemColor: 'rgba(50, 50, 50, 0.4)',
  mainNavItemBackground: 'rgba(0, 0, 0, 0)',
  mainNavSelectedItemBackground: '#FFFFFF',
  mainNavSelectedItemColor: '#222222',
  mainNavSelectedItemBorderColor: '#659CEC',
  mainNavBorderColor: '#e0e0e0',

  subNavItemColor: '#666666',
  subNavItemBackground: 'rgba(0, 0, 0, 0)',
  subNavListBorderColor: '#e0e0e0',

  primaryButtonText: {
    fontFamily: 'Rubik-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    color: colors.midnightBlue,
  },
  primaryButtonBackgroundColor: '#ffffff',
  primaryButtonBorderColor: '#ffffff',
  secondaryButtonTextColor: '#ffffff',
  secondaryButtonBackgroundColor: colors.midnightBlue,
  secondaryButtonBorderColor: colors.midnightBlue,

  lineColor: '#e5e5e5',
  sectionHeaderBackgroundColor: '#F2F2F2',
  indicatorColor: '#222222',

  smallGutter: 8,
  mediumGutter: 16,
  largeGutter: 24,
  extraLargeGutter: 32,
  galleryDotSize: 8,
};

const theme = getTheme(variables);

export default {
  ...theme,
};
