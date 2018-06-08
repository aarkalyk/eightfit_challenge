import { SET_GOAL, SET_AGE, SET_HEIGHT } from '../actions/types';

const INITIAL_STATE = {};

export const onboardingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GOAL:
      return { ...state, goal: action.goal };
    case SET_AGE:
      return { ...state, age: action.age };
    case SET_HEIGHT:
      return { ...state, height: action.height };
    default:
      return state;
  }
};
