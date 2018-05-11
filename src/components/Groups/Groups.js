import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import { View, Text, Divider, Title } from '@shoutem/ui';
import Emoji from 'react-native-emoji';

function Groups({ groups, style }) {
  return (
    <ScrollView>
      {groups.map(group => (
        <View key={group.id} styleName="vertical h-center" style={style.root}>
          <Title>{`Group ${group.name.toUpperCase()}`}</Title>
          <View style={style.fullWidth}>
            {group.table.map(({ team, points }) => (
              <View key={team.code} styleName="vertical h-start">
                <View styleName="horizontal space-between md-gutter" style={style.fullWidth}>
                  <View styleName="horizontal h-start">
                    <Emoji name={team.emoji} />
                    <Text styleName="sm-gutter-left">{team.code}</Text>
                  </View>
                  <View styleName="horizontal h-end" style={{}}>
                    <Text>{points}</Text>
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
