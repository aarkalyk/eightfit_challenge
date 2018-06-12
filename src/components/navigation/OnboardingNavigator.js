import { createStackNavigator } from 'react-navigation';

import { Goals, AgeEntry, HeightEntry, Confirmation } from '../../screens/onboarding';

export const OnboardingRoutes = {
  Goals: 'Goals',
  AgeEntry: 'AgeEntry',
  HeightEntry: 'HeightEntry',
  Confirmation: 'Confirmation',
};

export const OnboardingNavigator = createStackNavigator(
  {
    [OnboardingRoutes.Goals]: Goals,
    [OnboardingRoutes.AgeEntry]: AgeEntry,
    [OnboardingRoutes.HeightEntry]: HeightEntry,
    [OnboardingRoutes.Confirmation]: Confirmation,
  },
  {
    headerMode: 'screen',
  },
);
