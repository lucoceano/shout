import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Text, Screen, View, Button, Divider, Heading } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';
import CloseButton from '../CloseButton';
import TextInput from '../form/TextInput';

function Login({ handleSubmit, style, onClose }) {
  return (
    <Screen>
      <View styleName="vertical" style={style.root}>
        <CloseButton onClose={onClose} />
        <View styleName="vertical h-center">
          <Heading style={style.title}>Login</Heading>
        </View>
        <Field
          style={style.field}
          name="email"
          component={TextInput}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Divider styleName="line" />
        <Field
          style={style.field}
          name="password"
          component={TextInput}
          placeholder="Password"
          secureTextEntry
        />
        <Button style={style.button} styleName="secondary" onPress={handleSubmit}>
          <Text>Login</Text>
        </Button>
      </View>
    </Screen>
  );
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  style: PropTypes.shape({}).isRequired,
};

const styles = {
  root: {
    backgroundColor: '#00000000',
    padding: 16,
    paddingTop: 64,
  },
  button: {
    margin: 16,
  },
  title: {
    padding: 8,
    marginBottom: 24,
  },
};

export default compose(reduxForm({ form: 'login' }), connectStyle('com.lucoceano.Login', styles))(
  Login,
);
