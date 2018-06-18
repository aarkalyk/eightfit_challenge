import { createStackNavigator } from 'react-navigation';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import { Goals, AgeEntry, HeightEntry, Confirmation } from '../../screens/onboarding';

export const OnboardingRoutes = {
  Goals: 'Goals',
  AgeEntry: 'AgeEntry',
  HeightEntry: 'HeightEntry',
  Confirmation: 'Confirmation',
};

const OnboardingNav = createStackNavigator(
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

const mapStateToProps = (state) => ({
  state: state.nav,
});

const app = reduxifyNavigator(OnboardingNav, 'root');

export const OnboardingNavigator = connect(mapStateToProps)(app);
