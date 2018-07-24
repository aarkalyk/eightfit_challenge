import { createLogic } from 'redux-logic';

import { ActionKey } from '../actions/UserActions';

const authLogic = createLogic({
  type: ActionKey.SET_GOAL,
  process(_, dispatch, done) {
    console.warn('logic works');
    done();
  },
});

export const logicArr = [authLogic];
