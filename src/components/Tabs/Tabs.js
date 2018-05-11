import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button, Text, View } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';

function Tabs(props) {
  const { selectedTab, style, styleName, tabs, onTabChange } = props;
  return (
    <View styleName={`horizontal ${styleName}`}>
      {tabs.map(({ title }, i) => (
        <Button
          key={title}
          styleName={`full-width clear ${i !== selectedTab ? 'muted' : ''}`}
          style={{ ...style.tab, ...(i === selectedTab ? style.selected : {}) }}
          onPress={() => onTabChange(i)}
        >
          <Text>{title}</Text>
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

const styles = {
  tab: {
    height: 'auto',
  },
  selected: {
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
};

export default connectStyle('com.lucoceano.Tabs', styles)(Tabs);
