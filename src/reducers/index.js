import { combineReducers } from 'redux';
import testAction from './test';

export default combineReducers({
  test: testAction
})