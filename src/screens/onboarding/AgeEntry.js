import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { Button, TextInput, KeyboardAvoidingView } from '../../components/common';
import { images, textStyles } from '../../assets';
import { OnboardingRoutes } from '../../components/navigation';
import { setAge } from '../../actions';
import { valueWithinLimits, hasHeaderWithProgress } from '../../HOC';

const MIN_AGE = 13;
const MAX_AGE = 120;
const propTypes = {
  setAge: PropTypes.func,
  navigation: PropTypes.object,
  validateValue: PropTypes.func,
  errorMessage: PropTypes.string,
};

class AgeEntryScreen extends Component {
  state = {
    age: undefined,
  };

  onChangeAge = (text) => {
    const age = !isNaN(text) && Number(text);

    this.setState({ age });
    this.props.validateValue(age);
  };

  onContinueButtonPress = () => {
    this.props.setAge(this.state.age);
    this.props.navigation.navigate(OnboardingRoutes.HeightEntry);
  };

  render() {
    const { age } = this.state;
    const { errorMessage } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={[styles.title, textStyles.h2]}>How old are you?</Text>
          {!!errorMessage && (
            <Text style={[textStyles.body, styles.errorText]}>{errorMessage}</Text>
          )}
          <TextInput
            onChangeText={this.onChangeAge}
            value={age ? `${age}` : ''}
            style={styles.textInput}
            maxLength={3}
            hasError={!!errorMessage}
            autoFocus={true}
          />
        </View>
        <KeyboardAvoidingView>
          <Button
            onPress={this.onContinueButtonPress}
            disabled={!!errorMessage || !age}
            title="Continue"
            style={styles.continueButton}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

AgeEntryScreen.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  inputContainer: {
    alignItems: 'center',
  },
  title: {
    marginTop: 26,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  textInput: {
    marginTop: 20,
    marginHorizontal: 25,
  },
  continueButton: {
    marginBottom: 20,
  },
});

export const AgeEntry = compose(
  hasHeaderWithProgress(0.75),
  connect(null, { setAge }),
  valueWithinLimits(MIN_AGE, MAX_AGE, 'Please, enter a valid number'),
)(AgeEntryScreen);
