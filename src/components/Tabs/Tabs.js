import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button, Text, View } from '@shoutem/ui';
import { FormattedMessage } from 'react-intl';
import { connectStyle } from '../../style';

function Tabs(props) {
  const { selectedTab, style, styleName, tabs, onTabChange } = props;
  return (
    <View styleName={`horizontal ${styleName}`}>
      {tabs.map(({ title, style: tabStyle }, i) => (
        <Button
          key={title}
          styleName={`full-width clear ${i !== selectedTab ? 'muted' : ''}`}
          style={{
            ...style.tab,
            ...(i === selectedTab ? style.selected : {}),
            ...style[tabStyle],
          }}
          onPress={() => onTabChange(i)}
        >
          <Text style={style.text[tabStyle]}>
            <FormattedMessage id={title} />
          </Text>
        </Button>
      ))}
    </View>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  style: PropTypes.shape({}).isRequired,
  onTabChange: PropTypes.func.isRequired,
  styleName: PropTypes.string,
  selectedTab: PropTypes.number,
};

Tabs.defaultProps = {
  styleName: '',
  selectedTab: 0,
};

const styles = (variables, colors) => ({
  tab: {
    height: 'auto',
  },
  selected: {
    borderBottomColor: colors.midnightBlue,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  light: {
    borderBottomColor: colors.white,
  },
  text: {
    light: {
      color: colors.white,
    },
  },
});

export default connectStyle('com.lucoceano.Tabs', styles)(Tabs);
