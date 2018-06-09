import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, StyleSheet, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

import { Button, Header, TextInput, SegmentedControl } from '../components/common';
import { OnboardingRoutes } from '../components/navigation';
import { images } from '../assets';
import { setHeight } from '../actions';
import { Converter } from '../utils/Converter';
import { MetricUnits } from '../utils/constants';

class HeightEntryScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header progress={1.0} onBackButtonPress={() => navigation.goBack()} />,
  });

  state = { currentUnits: MetricUnits.cm };

  onContinueButtonPress = () => {
    const { centimiters } = this.state;
    this.props.setHeight(centimiters);
    this.props.navigation.navigate(OnboardingRoutes.Confirmation);
  };

  onChangeUnits = (currentUnits) => this.setState({ currentUnits });

  onChangeText = (name) => (text) => {
    const height = !isNaN(text) && Number(text);
    const errorMessage = (height && height < 120) || height > 301 ? 'Please enter your real height' : '';
    if (this.state.errorMessage !== errorMessage) {
      LayoutAnimation.easeInEaseOut();
    }

    this.setState({ [name]: height, errorMessage }, () => {
      if (this.state.currentUnits === MetricUnits.cm) {
        const { feet, inches } = Converter.cmToFeet(height);
        this.setState({ feet, inches });
      } else {
        const { feet, inches } = this.state;
        const centimiters = Converter.feetToCm(feet, inches);
        this.setState({ centimiters });
      }
    });
  };

  renderTextInputs = () => {
    const { centimiters, currentUnits, inches, feet, errorMessage } = this.state;

    return currentUnits === MetricUnits.cm ? (
      <TextInput
        onChangeText={this.onChangeText('centimiters')}
        value={centimiters ? `${centimiters}` : ''}
        title="Cm"
        style={styles.cmTextInput}
        maxLength={3}
        hasError={!!errorMessage}
      />
    ) : (
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          onChangeText={this.onChangeText('feet')}
          value={feet ? `${feet}` : ''}
          title="Ft"
          style={styles.ftTextInput}
          maxLength={1}
          hasError={!!errorMessage}
        />
        <TextInput
          onChangeText={this.onChangeText('inches')}
          value={inches ? `${inches}` : ''}
          title="In"
          style={styles.inTextInput}
          maxLength={2}
          hasError={!!errorMessage}
        />
      </View>
    );
  };

  render() {
    const { centimiters, errorMessage, currentUnits } = this.state;

    return (
      <View style={styles.mainContainer}>
        <View style={styles.upperHalfContainer}>
          <Text style={styles.title}>{"What's your height?"}</Text>
          {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
          {this.renderTextInputs()}
          <SegmentedControl
            style={styles.segmentedControl}
            titles={[MetricUnits.cm, MetricUnits.ft]}
            onSelect={this.onChangeUnits}
            currentIndex={currentUnits === MetricUnits.cm ? 0 : 1}
          />
        </View>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={64}>
          <Button
            onPress={this.onContinueButtonPress}
            disabled={!this.state.centimiters}
            title="Continue"
            style={styles.continueButton}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  upperHalfContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 26,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  segmentedControl: {
    marginTop: 15,
  },
  continueButton: {
    marginBottom: 20,
  },
  cmTextInput: {
    marginHorizontal: 25,
  },
  ftTextInput: {
    flex: 0.5,
    marginLeft: 25,
    marginRight: 12.5,
  },
  inTextInput: {
    flex: 0.5,
    marginRight: 25,
    marginLeft: 12.5,
  },
});

export const HeightEntry = connect(null, { setHeight })(HeightEntryScreen);
