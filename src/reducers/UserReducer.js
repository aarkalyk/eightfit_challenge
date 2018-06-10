import { ActionKey } from '../actions/UserActions';

const INITIAL_STATE = {};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionKey.SET_GOAL:
      return { ...state, goalType: action.goalType };
    case ActionKey.SET_AGE:
      return { ...state, age: action.age };
    case ActionKey.SET_HEIGHT:
      return { ...state, height: action.height };
    default:
      return state;
  }
};
