import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

import { Button, Header, TextInput, SegmentedControl } from '../components/common';
import { OnboardingRoutes } from '../components/navigation';
import { images } from '../assets';

class HeightEntryScreen extends Component {
  static navigationOptions = {
    header: <Header />,
  };

  state = {
    heightUnits: 'cm',
    centimiters: undefined,
    feet: undefined,
    inches: undefined,
    errorMessage: '',
  };

  onContinueButtonPress = () => this.props.navigation.navigate(OnboardingRoutes.Confirmation);

  onChangeUnits = (heightUnits) => this.setState({ heightUnits });

  onChangeText = (name) => (text) => {
    const value = !isNaN(text) && Number(text);
    this.setState({ [name]: value });
  };

  renderTextInputs = () => {
    const { centimiters, heightUnits, inches, feet } = this.state;

    return heightUnits === 'cm' ? (
      <TextInput
        onChangeText={this.onChangeText('centimiters')}
        value={centimiters ? `${centimiters}` : ''}
        title="Cm"
        style={{ marginHorizontal: 25 }}
      />
    ) : (
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          onChangeText={this.onChangeText('feet')}
          value={feet ? `${feet}` : ''}
          title="Ft"
          style={{ flex: 0.5, marginLeft: 25, marginRight: 12.5 }}
        />
        <TextInput
          onChangeText={this.onChangeText('inches')}
          value={inches ? `${inches}` : ''}
          title="In"
          style={{ flex: 0.5, marginRight: 25, marginLeft: 12.5 }}
        />
      </View>
    );
  };

  render() {
    const { centimiters, errorMessage, heightUnits } = this.state;
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
            currentIndex={heightUnits === 'cm' ? 0 : 1}
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

export { HeightEntryScreen };
