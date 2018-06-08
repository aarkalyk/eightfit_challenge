import { SET_GOAL, SET_AGE, SET_HEIGHT } from './types';

export const setGoal = (goal) => ({
  type: SET_GOAL,
  goal,
});

export const setAge = (age) => ({
  type: SET_AGE,
  age,
});

export const setHeight = (height) => ({
  type: SET_HEIGHT,
  height,
});
