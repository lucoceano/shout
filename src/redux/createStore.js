import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default function() {
  return createStore(
    combineReducers({
      form: formReducer,
    }),
  );
}
