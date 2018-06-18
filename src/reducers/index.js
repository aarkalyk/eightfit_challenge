import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { userReducer } from './UserReducer';

import { OnboardingNavigator } from '../components/navigation/OnboardingNavigator';

const navReducer = createNavigationReducer(OnboardingNavigator);

export const rootReducer = combineReducers({
  user: userReducer,
  nav: navReducer,
});
