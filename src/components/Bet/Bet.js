import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { View, Text, Button, Spinner } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';
import Emoji from 'react-native-emoji';
import { reduxForm, Field } from 'redux-form';
import SwitchInput from '../form/Switch';
import TextInput from '../form/TextInput';

function Bet({ match, loading, loggedIn, style, onLoginRequest, handleSubmit }) {
  if (loading) {
    return (
      <View styleName="center">
        <Spinner />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!loggedIn) {
    return (
      <View styleName="vertical" style={style.root}>
        <Text styleName="h-center">Você precisa estar logado para fazer um palpite.</Text>
        <Button styleName="secondary" style={style.button} onPress={onLoginRequest}>
          <Text>Logar</Text>
        </Button>
      </View>
    );
  }

  return (
    <View style={style.root}>
      <View styleName="horizontal v-center h-center" style={style.container}>
        <View styleName="horizontal v-center h-center">
          <Text style={style.flag}>
            <Emoji name={match.teams.home.emoji} />
          </Text>
          <Field
            component={TextInput}
            style={style.bet}
            name="score.home"
            keyboardType="numeric"
            textAlign="center"
            placeholder="-"
            selectTextOnFocus
          />
        </View>
        <Text>x</Text>
        <View styleName="vertical v-center h-center">
          <View styleName="horizontal v-center h-center">
            <Field
              component={TextInput}
              style={style.bet}
              name="score.away"
              keyboardType="numeric"
              textAlign="center"
              placeholder="-"
              selectTextOnFocus
            />
            <Text style={style.flag}>
              <Emoji name={match.teams.away.emoji} />
            </Text>
          </View>
        </View>
      </View>

      <View styleName="horizontal h-center v-center">
        <Field component={SwitchInput} name="penalty" />
        <Text styleName="md-gutter-left">Penalty</Text>
      </View>

      <View styleName="vertical h-end lg-gutter-top">
        <Button styleName="secondary" style={style.save} onPress={handleSubmit}>
          <Text>Salvar</Text>
        </Button>
      </View>
    </View>
  );
}

Bet.propTypes = {
  style: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
  onLoginRequest: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

const styles = {
  root: {
    margin: 8,
    padding: 16,
    elevation: 1,
    backgroundColor: '#ffffff',
  },
  button: {
    margin: 8,
    marginTop: 16,
  },
  bet: {
    padding: 8,
    fontSize: 44,
    width: 64,
    textAlign: 'center',
  },
  flag: {
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 32,
  },
  save: {
    width: 96,
  },
};

export default compose(connectStyle('com.lucoceano.Bet', styles), reduxForm({ form: 'bet' }))(Bet);
