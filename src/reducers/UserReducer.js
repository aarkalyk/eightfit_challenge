import { ActionKey } from '../actions/UserActions';

const INITIAL_STATE = {
  goal: '', // lose_weight | get_fitter | gainMuscle
  age: undefined,
  height: {
    preferredUnits: '', // cm | ft
    centimeters: undefined,
    feet: undefined,
    inches: undefined,
  },
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionKey.SET_GOAL:
      return { ...state, goal: action.goal };
    case ActionKey.SET_AGE:
      return { ...state, age: action.age };
    case ActionKey.SET_HEIGHT:
      return { ...state, height: action.height };
    default:
      return state;
  }
};
