export const ActionKey = {
  SET_GOAL: 'USER/SET_GOAL',
  SET_AGE: 'USER/SET_AGE',
  SET_HEIGHT: 'USER/SET_HEIGHT',
};

export const setGoal = (goal) => ({
  type: ActionKey.SET_GOAL,
  goal,
});

export const setAge = (age) => ({
  type: ActionKey.SET_AGE,
  age,
});

export const setHeight = (height) => ({
  type: ActionKey.SET_HEIGHT,
  height,
});
