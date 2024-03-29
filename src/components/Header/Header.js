import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationBar, Button, Icon } from '@shoutem/ui';
import { connectStyle } from '../../style';
import Tabs from '../Tabs';

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
      title: 'matches',
      style: 'light',
    },
    {
      title: 'groups',
      style: 'light',
    },
  ];

  changeTab = selectedTab => {
    this.setState({ selectedTab });
    this.props.onTabChange(selectedTab);
  };

  render() {
    const { style, onUserClick } = this.props;
    const { selectedTab } = this.state;
    return (
      <NavigationBar
        styleName="inline"
        style={{
          centerComponent: style.centerComponent,
        }}
        centerComponent={
          <Tabs
            tabs={this.tabs}
            styleName="flexible"
            onTabChange={this.changeTab}
            selectedTab={selectedTab}
          />
        }
        rightComponent={
          <Button onPress={onUserClick} styleName="secondary clear">
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
};

export default connectStyle('com.lucoceano.Header', styles)(Header);
