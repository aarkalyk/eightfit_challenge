import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { OnboardingNavigator } from './src/components/navigation';
import { reducers } from './src/reducers';

export default class App extends Component {
  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <OnboardingNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
