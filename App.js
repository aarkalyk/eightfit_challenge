import React, { Component } from 'react';
import { UIManager, Platform } from 'react-native';
import { Provider } from 'react-redux';

import { OnboardingNavigator } from './src/components/navigation';
import { store } from './src/store';

export default class App extends Component {
  constructor(props) {
    super(props);

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <OnboardingNavigator />
      </Provider>
    );
  }
}
