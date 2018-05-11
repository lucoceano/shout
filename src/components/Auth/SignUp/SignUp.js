import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Text, View, Button, Divider } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';
import TextInput from '../../form/TextInput';

function SignUp({ handleSubmit, style }) {
  return (
    <View styleName="vertical" style={style.root}>
      <Field
        name="firstName"
        component={TextInput}
        placeholder="Nome"
        autoCapitalize="words"
        autoCorrect={false}
      />
      <Divider styleName="line" />
      <Field
        name="lastName"
        component={TextInput}
        placeholder="Sobrenome"
        autoCapitalize="words"
        autoCorrect={false}
      />
      <Divider styleName="line" />
      <Field
        name="email"
        component={TextInput}
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Divider styleName="line" />
      <Field name="password" component={TextInput} placeholder="Password" secureTextEntry />
      <Button style={style.button} styleName="secondary" onPress={handleSubmit}>
        <Text>Sign Up</Text>
      </Button>
    </View>
  );
}

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  style: PropTypes.shape({}).isRequired,
};

const styles = {
  root: {
    backgroundColor: '#00000000',
    padding: 16,
    paddingTop: 32,
  },
  button: {
    margin: 16,
  },
  title: {
    padding: 8,
    marginBottom: 24,
  },
};

export default compose(reduxForm({ form: 'signup' }), connectStyle('com.lucoceano.SignUp', styles))(
  SignUp,
);
