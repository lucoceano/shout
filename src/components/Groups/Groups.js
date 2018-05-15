import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import { View, Text, Divider, Title } from '@shoutem/ui';
import Emoji from 'react-native-emoji';
import { FormattedMessage } from 'react-intl';
import intl from '../../intl';

function Groups({ groups, style }) {
  return (
    <ScrollView>
      {groups.map(group => (
        <View key={group.id} styleName="vertical h-center" style={style.root}>
          <View styleName="vertical">
            <Title>{`Group ${group.name.toUpperCase()}`}</Title>
            <Divider styleName="line md-gutter" />
          </View>
          <View style={style.fullWidth}>
            {group.table.map(({ team }, index) => (
              <View key={team.code} styleName="vertical h-start">
                <View styleName="horizontal space-between md-gutter" style={style.fullWidth}>
                  <View styleName="horizontal h-start">
                    <Emoji name={team.emoji} />
                    <Text styleName="sm-gutter-left">
                      {intl.countries[team.code.toUpperCase()]}
                    </Text>
                  </View>
                  <View styleName="horizontal h-end" style={{}}>
                    <Text>
                      <FormattedMessage id="positionNumber" values={{ position: index + 1 }} />
                    </Text>
                  </View>
                </View>
                <Divider styleName="line" />
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

Groups.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
  style: PropTypes.shape({}).isRequired,
};

Groups.defaultProps = {
  groups: [],
};

const styles = {
  root: {
    margin: 8,
    paddingTop: 16,
    elevation: 1,
    backgroundColor: '#ffffff',
  },
  fullWidth: {
    width: '100%',
  },
};

export default connectStyle('com.lucoceano.Groups', styles)(Groups);
