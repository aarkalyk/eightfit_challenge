export const MetricUnits = {
  cm: 'cm',
  ft: 'ft',
};

export const GoalTypes = {
  loseWeight: 'lose_weight',
  getFitter: 'get_fitter',
  gainMuscle: 'gainMuscle',
};

export const GoalItems = {
  [GoalTypes.loseWeight]: {
    type: GoalTypes.loseWeight,
    displayTitle: 'Lose weight',
    displaySubtitle: 'Burn fat & get lean',
  },
  [GoalTypes.getFitter]: {
    type: GoalTypes.getFitter,
    displayTitle: 'Get fitter',
    displaySubtitle: 'Tone up & feel healthy',
  },
  [GoalTypes.gainMuscle]: {
    type: GoalTypes.gainMuscle,
    displayTitle: 'Gain muscle',
    displaySubtitle: 'Build mass & gain muscles',
  },
};
