import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { GoalsScreen } from './src/screens/GoalsScreen';

const AppNavigator = createStackNavigator({
  Goals: GoalsScreen,
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppNavigator />;
  }
}
