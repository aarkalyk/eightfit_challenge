import { SET_GOAL, SET_AGE, SET_HEIGHT } from './types';

export const setGoal = (goalType) => ({
  type: SET_GOAL,
  goalType,
});

export const setAge = (age) => ({
  type: SET_AGE,
  age,
});

export const setHeight = (height) => ({
  type: SET_HEIGHT,
  height,
});
