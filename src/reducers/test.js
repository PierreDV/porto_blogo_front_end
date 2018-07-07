import { TEST_ACTION } from '../actions';

const DEFAULT_STATE = { testString: 'default state'};

export default function(state = DEFAULT_STATE, action) {
  switch(action.type) {
  case TEST_ACTION:
    return { testString: 'It worked!' }
  }
  return state;
}