import React, { Component } from 'react';
import { UIManager, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { OnboardingNavigator } from './src/components/navigation';
import { reducers } from './src/reducers';

export default class App extends Component {
  constructor(props) {
    super(props);

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <OnboardingNavigator />
      </Provider>
    );
  }
}
