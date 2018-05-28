import { connectStyle as shoutemConnectStyle } from '@shoutem/theme';
import { colors, variables } from './theme';

export const connectStyle = (name, styles) => {
  const finalStyle = typeof styles === 'function' ? styles(variables, colors) : styles;
  return shoutemConnectStyle(name, finalStyle);
};

export default {
  connectStyle,
};
