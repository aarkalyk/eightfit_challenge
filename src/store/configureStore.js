import { createLogicMiddleware } from 'redux-logic';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import { rootReducer } from '../reducers';
import { logicArr } from '../logic';
import { applyMiddleware, createStore } from 'redux';

export const configureStore = () => {
  const reduxMiddleware = createReactNavigationReduxMiddleware('root', (state) => state.nav);
  const logicMiddleware = createLogicMiddleware(logicArr);
  const store = createStore(rootReducer, applyMiddleware(reduxMiddleware, logicMiddleware));

  return store;
};
