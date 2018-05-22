import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Text, View, Button, Divider } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';
import { FormattedMessage, injectIntl } from 'react-intl';
import TextInput from '../../form/TextInput';

function Login({ handleSubmit, style, intl }) {
  return (
    <View styleName="vertical" style={style.root}>
      <Field
        name="email"
        component={TextInput}
        placeholder={intl.formatMessage({ id: 'email' })}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Divider styleName="line" />
      <Field
        name="password"
        component={TextInput}
        placeholder={intl.formatMessage({ id: 'password' })}
        secureTextEntry
      />
      <Button style={style.button} styleName="secondary" onPress={handleSubmit}>
        <Text>
          <FormattedMessage id="login" />
        </Text>
      </Button>
    </View>
  );
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  style: PropTypes.shape({}).isRequired,
  intl: PropTypes.shape({}).isRequired,
};

const styles = {
  root: {
    backgroundColor: '#00000000',
    padding: 16,
    marginTop: 32,
  },
  button: {
    margin: 16,
  },
  title: {
    padding: 8,
    marginBottom: 24,
  },
};

export default compose(
  reduxForm({ form: 'login' }),
  injectIntl,
  connectStyle('com.lucoceano.Login', styles),
)(Login);
