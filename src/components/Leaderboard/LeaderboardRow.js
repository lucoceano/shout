import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Divider } from '@shoutem/ui';
import { FormattedMessage } from 'react-intl';
import { UserAvatar } from '../User';

export default function LeaderboarRow({ loaderboad, odd }) {
  const style = odd ? { backgroundColor: '#FFFFFF' } : { backgroundColor: '#fcfcfc' };

  return (
    <View styleName="vertical" style={style}>
      <View styleName="vertical sm-gutter">
        <View styleName="horizontal space-between">
          <View styleName="horizontal v-center">
            <Text styleName="sm-gutter-left md-gutter-right">
              <FormattedMessage id="positionNumber" values={{ position: loaderboad.position }} />
            </Text>
            <UserAvatar styleName="small-avatar md-gutter" user={loaderboad.user} />
            <Text styleName="md-gutter">{loaderboad.user.name}</Text>
          </View>
          <Text styleName="md-gutter">
            <FormattedMessage id="pointsNumber" values={{ points: loaderboad.points }} />
          </Text>
        </View>
      </View>
      <Divider styleName="line" />
    </View>
  );
}

LeaderboarRow.propTypes = {
  loaderboad: PropTypes.shape({}).isRequired,
  odd: PropTypes.bool.isRequired,
};
