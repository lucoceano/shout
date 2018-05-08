import React from 'react';
import PropTypes from 'prop-types';
import { Text, Screen, NavigationBar, Button, Icon } from '@shoutem/ui';

function Match({ match, navigator }) {
  return (
    <Screen>
      <NavigationBar
        title={`Match ${match.number}`}
        leftComponent={
          <Button onPress={() => navigator.pop()}>
            <Icon name="back" />
          </Button>
        }
      />
      <Text>{match.code}</Text>
    </Screen>
  );
}

Match.propTypes = {
  match: PropTypes.shape({}).isRequired,
  navigator: PropTypes.shape({
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

Match.path = 'com.lucoceano.Match';

export default Match;
