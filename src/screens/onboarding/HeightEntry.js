import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  LayoutAnimation,
  Keyboard,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { Button, TextInput, SegmentedControl, KeyboardAvoidingView } from '../../components/common';
import { OnboardingRoutes } from '../../components/navigation';
import { images, textStyles } from '../../assets';
import { setHeight } from '../../actions';
import { Converter } from '../../utils/Converter';
import { MetricUnits } from '../../utils/constants';
import { valueWithinLimits, hasHeaderWithProgress } from '../../HOC';

const MIN_HEIGHT = 125;
const MAX_HEIGHT = 301;
const propTypes = {
  setHeight: PropTypes.func,
  navigation: PropTypes.object,
};

class HeightEntryScreen extends Component {
  state = {
    preferredUnits: MetricUnits.cm,
    centimiters: undefined,
    feet: undefined,
    inches: undefined,
  };

  onContinueButtonPress = () => {
    Keyboard.dismiss();
    const { preferredUnits, centimiters } = this.state;
    this.props.setHeight({ preferredUnits, valueInCm: centimiters });
    this.props.navigation.navigate(OnboardingRoutes.Confirmation);
  };

  onChangeUnits = (preferredUnits) => this.setState({ preferredUnits });

  onChangeText = (name) => (text) => {
    const height = !isNaN(text) && Number(text);

    this.setState({ [name]: height }, () => {
      if (this.state.preferredUnits === MetricUnits.cm) {
        const { feet, inches } = Converter.cmToFeet(height);

        this.setState({ feet, inches });
        this.props.validateValue(height);
      } else {
        const { feet, inches } = this.state;
        const centimiters = Converter.feetToCm(feet, inches);

        this.setState({ centimiters });
        this.props.validateValue(centimiters);
      }
    });
  };

  renderTextInputs = () => {
    const { centimiters, preferredUnits, inches, feet } = this.state;
    const { errorMessage } = this.props;

    return preferredUnits === MetricUnits.cm ? (
      <TextInput
        onChangeText={this.onChangeText('centimiters')}
        value={centimiters ? `${centimiters}` : ''}
        title="Cm"
        style={styles.cmTextInput}
        maxLength={3}
        hasError={!!errorMessage}
        autoFocus={true}
      />
    ) : (
      <View style={styles.ftInTextInputsContainer}>
        <TextInput
          onChangeText={this.onChangeText('feet')}
          value={feet ? `${feet}` : ''}
          title="Ft"
          style={styles.ftTextInput}
          maxLength={1}
          hasError={!!errorMessage}
          autoFocus
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
    const { centimiters, preferredUnits } = this.state;
    const { errorMessage } = this.props;

    return (
      <View style={styles.mainContainer}>
        <View style={styles.upperHalfContainer}>
          <Text style={[styles.title, textStyles.h2]}>How tall are you?</Text>
          {!!errorMessage && (
            <Text style={[textStyles.body, styles.errorText]}>{errorMessage}</Text>
          )}
          {this.renderTextInputs()}
          <SegmentedControl
            style={styles.segmentedControl}
            titles={[MetricUnits.ft, MetricUnits.cm]}
            onSelect={this.onChangeUnits}
            currentIndex={preferredUnits === MetricUnits.cm ? 1 : 0}
          />
        </View>
        <KeyboardAvoidingView>
          <Button
            onPress={this.onContinueButtonPress}
            disabled={!!errorMessage || !this.state.centimiters}
            title="Continue"
            style={styles.continueButton}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

HeightEntryScreen.propTypes = propTypes;

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
    marginTop: 20,
    marginHorizontal: 25,
  },
  ftTextInput: {
    marginTop: 20,
    flex: 0.5,
    marginLeft: 25,
    marginRight: 12.5,
  },
  inTextInput: {
    marginTop: 20,
    flex: 0.5,
    marginRight: 25,
    marginLeft: 12.5,
  },
  ftInTextInputsContainer: {
    flexDirection: 'row',
  },
});

export const HeightEntry = compose(
  hasHeaderWithProgress(1.0),
  valueWithinLimits(MIN_HEIGHT, MAX_HEIGHT, 'Please, enter your real height'),
  connect(null, { setHeight }),
)(HeightEntryScreen);
