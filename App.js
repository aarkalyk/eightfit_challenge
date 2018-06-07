import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { GoalsScreen, AgeEntryScreen, HeightEntryScreen } from './src/screens';

const AppNavigator = createStackNavigator({
  Goals: GoalsScreen,
  AgeEntry: AgeEntryScreen,
  HeightEntry: HeightEntryScreen,
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppNavigator />;
  }
}
