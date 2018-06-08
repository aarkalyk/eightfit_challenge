import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import { GoalsScreen, AgeEntryScreen, HeightEntryScreen, ConfirmationScreen } from '../../screens';

export const OnboardingRoutes = {
  Goals: 'Goals',
  AgeEntry: 'AgeEntry',
  HeightEntry: 'HeightEntry',
  Confirmation: 'Confirmation',
};

export const OnboardingNavigator = createStackNavigator({
  [OnboardingRoutes.Goals]: GoalsScreen,
  [OnboardingRoutes.AgeEntry]: AgeEntryScreen,
  [OnboardingRoutes.HeightEntry]: HeightEntryScreen,
  [OnboardingRoutes.Confirmation]: ConfirmationScreen,
});
