import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import { Button, Header, TextInput, SegmentedControl } from '../components/common';
import { OnboardingRoutes } from '../components/navigation';
import { images } from '../assets';
import { setHeight } from '../actions';

class HeightEntryScreen extends Component {
  static navigationOptions = {
    header: <Header progress={1.0} />,
  };

  state = {
    measureUnits: 'cm',
    centimiters: undefined,
    feet: undefined,
    inches: undefined,
    errorMessage: '',
  };

  onContinueButtonPress = () => {
    const { measureUnits, centimiters, inches, feet } = this.state;
    this.props.setHeight({ measureUnits, centimiters, inches, feet });
    this.props.navigation.navigate(OnboardingRoutes.Confirmation);
  };

  onChangeUnits = (measureUnits) => this.setState({ measureUnits });

  onChangeText = (name) => (text) => {
    const value = !isNaN(text) && Number(text);
    this.setState({ [name]: value });
  };

  renderTextInputs = () => {
    const { centimiters, measureUnits, inches, feet } = this.state;

    return measureUnits === 'cm' ? (
      <TextInput
        onChangeText={this.onChangeText('centimiters')}
        value={centimiters ? `${centimiters}` : ''}
        title="Cm"
        style={{ marginHorizontal: 25 }}
        maxLength={3}
      />
    ) : (
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          onChangeText={this.onChangeText('feet')}
          value={feet ? `${feet}` : ''}
          title="Ft"
          style={{ flex: 0.5, marginLeft: 25, marginRight: 12.5 }}
          maxLength={3}
        />
        <TextInput
          onChangeText={this.onChangeText('inches')}
          value={inches ? `${inches}` : ''}
          title="In"
          style={{ flex: 0.5, marginRight: 25, marginLeft: 12.5 }}
          maxLength={3}
        />
      </View>
    );
  };

  render() {
    const { centimiters, errorMessage, measureUnits } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'space-between' }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 25 }}>{"What's your height?"}</Text>
          {errorMessage && <Text style={{ color: 'red', marginTop: 5 }}>{errorMessage}</Text>}
          {this.renderTextInputs()}
          <SegmentedControl
            style={{ marginTop: 15 }}
            titles={['cm', 'ft']}
            onSelect={this.onChangeUnits}
            currentIndex={measureUnits === 'cm' ? 0 : 1}
          />
        </View>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={64}>
          <Button
            onPress={this.onContinueButtonPress}
            disabled={!this.state.centimiters}
            title="Continue"
            style={{ marginBottom: 20 }}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export const HeightEntry = connect(null, { setHeight })(HeightEntryScreen);
