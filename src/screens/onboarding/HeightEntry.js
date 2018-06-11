import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  LayoutAnimation,
  Platform,
  Keyboard,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Button,
  Header,
  TextInput,
  SegmentedControl,
  KeyboardAvoidingView,
} from '../../components/common';
import { OnboardingRoutes } from '../../components/navigation';
import { images, textStyles } from '../../assets';
import { setHeight } from '../../actions';
import { Converter } from '../../utils/Converter';
import { MetricUnits } from '../../utils/constants';

const MIN_HEIGHT = 120;
const MAX_HEIGHT = 301;
const propTypes = {
  setHeight: PropTypes.func,
  navigation: PropTypes.object,
};

class HeightEntryScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header progress={1.0} onBackButtonPress={() => navigation.goBack()} />,
  });

  state = {
    preferredUnits: MetricUnits.cm,
    centimiters: undefined,
    feet: undefined,
    inches: undefined,
  };

  componentDidUpdate(prevProps, prevState) {
    this.state.errorMessage !== prevState.errorMessage && LayoutAnimation.easeInEaseOut();
  }

  getHeightError(centimiters) {
    return centimiters && (centimiters < MIN_HEIGHT || centimiters > MAX_HEIGHT)
      ? 'Please enter your real height'
      : '';
  }

  onContinueButtonPress = () => {
    Keyboard.dismiss();
    const height = { ...this.state };
    this.props.setHeight(height);
    this.props.navigation.navigate(OnboardingRoutes.Confirmation);
  };

  onChangeUnits = (preferredUnits) => this.setState({ preferredUnits });

  onChangeText = (name) => (text) => {
    const height = !isNaN(text) && Number(text);

    this.setState({ [name]: height }, () => {
      if (this.state.preferredUnits === MetricUnits.cm) {
        const { feet, inches } = Converter.cmToFeet(height);
        const errorMessage = this.getHeightError(height);

        this.setState({ feet, inches, errorMessage });
      } else {
        const { feet, inches } = this.state;
        const centimiters = Converter.feetToCm(feet, inches);
        const errorMessage = this.getHeightError(centimiters);

        this.setState({ centimiters, errorMessage });
      }
    });
  };

  renderTextInputs = () => {
    const { centimiters, preferredUnits, inches, feet, errorMessage } = this.state;

    return preferredUnits === MetricUnits.cm ? (
      <TextInput
        onChangeText={this.onChangeText('centimiters')}
        value={centimiters ? `${centimiters}` : ''}
        title="Cm"
        style={StyleSheet.flatten(styles.cmTextInput)}
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
          style={StyleSheet.flatten(styles.ftTextInput)}
          maxLength={1}
          hasError={!!errorMessage}
          autoFocus
        />
        <TextInput
          onChangeText={this.onChangeText('inches')}
          value={inches ? `${inches}` : ''}
          title="In"
          style={StyleSheet.flatten(styles.inTextInput)}
          maxLength={2}
          hasError={!!errorMessage}
        />
      </View>
    );
  };

  render() {
    const { centimiters, errorMessage, preferredUnits } = this.state;

    return (
      <View style={styles.mainContainer}>
        <View style={styles.upperHalfContainer}>
          <Text style={[styles.title, textStyles.h2]}>How tall are you?</Text>
          {!!errorMessage && (
            <Text style={[textStyles.body, styles.errorText]}>{errorMessage}</Text>
          )}
          {this.renderTextInputs()}
          <SegmentedControl
            style={StyleSheet.flatten(styles.segmentedControl)}
            titles={[MetricUnits.cm, MetricUnits.ft]}
            onSelect={this.onChangeUnits}
            currentIndex={preferredUnits === MetricUnits.cm ? 0 : 1}
          />
        </View>
        <KeyboardAvoidingView>
          <Button
            onPress={this.onContinueButtonPress}
            disabled={!!errorMessage || !this.state.centimiters}
            title="Continue"
            style={StyleSheet.flatten(styles.continueButton)}
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

export const HeightEntry = connect(null, { setHeight })(HeightEntryScreen);
