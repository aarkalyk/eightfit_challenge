import { combineReducers } from 'redux';
import { onboardingReducer } from './OnboardingReducer';

export const reducers = combineReducers({
  onboarding: onboardingReducer,
});
