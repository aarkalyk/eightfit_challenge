import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { OnboardingNavigator } from './src/components/navigation';

export default class App extends Component {
  render() {
    return <OnboardingNavigator />;
  }
}
