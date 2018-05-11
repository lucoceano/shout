import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { NavigationBar, Button, Icon, View, Text } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';

class Header extends Component {
  static propTypes = {
    onUserClick: PropTypes.func.isRequired,
    onTabChange: PropTypes.func.isRequired,
    initialTab: PropTypes.number.isRequired,
    style: PropTypes.shape({}).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: props.initialTab,
    };
  }

  tabs = [
    {
      title: 'Matches',
    },
    {
      title: 'Groups',
    },
  ];

  changeTab = selectedTab => {
    this.setState({ selectedTab });
    this.props.onTabChange(selectedTab);
  };

  renderTabs = () => {
    const { style } = this.props;
    const { selectedTab } = this.state;

    return this.tabs.map(({ title }, i) => (
      <Button
        key={title}
        styleName={`full-width clear ${i !== selectedTab ? 'muted' : ''}`}
        style={{ ...style.tab, ...(i === selectedTab ? style.selected : {}) }}
        onPress={() => this.changeTab(i)}
      >
        <Text>{title}</Text>
      </Button>
    ));
  };

  render() {
    const { style, onUserClick } = this.props;
    return (
      <NavigationBar
        styleName="inline"
        style={{
          centerComponent: style.centerComponent,
        }}
        centerComponent={<View styleName="horizontal flexible">{this.renderTabs()}</View>}
        rightComponent={
          <Button onPress={onUserClick}>
            <Icon name="user-profile" />
          </Button>
        }
      />
    );
  }
}

const styles = {
  centerComponent: {
    flex: 2,
  },
  tab: {
    height: 'auto',
  },
  selected: {
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
};

export default connectStyle('com.lucoceano.Header', styles)(Header);
