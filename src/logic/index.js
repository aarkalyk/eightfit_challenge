import { createLogic } from 'redux-logic';
import { NavigationActions } from 'react-navigation';

import { ActionKey } from '../actions/UserActions';
import { OnboardingRoutes } from '../components/navigation/OnboardingNavigator';

const authLogic = createLogic({
  type: ActionKey.SET_GOAL,
  process(_, dispatch, done) {
    console.warn(
      'logic works',
      NavigationActions.navigate({
        routeName: OnboardingRoutes.AgeEntry,
      }),
    );
    dispatch(
      NavigationActions.navigate({
        routeName: OnboardingRoutes.AgeEntry,
      }),
    );
    done();
  },
});

export const logicArr = [authLogic];
