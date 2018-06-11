import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import { Button, Header, TextInput, KeyboardAvoidingView } from '../../components/common';
import { images, textStyles } from '../../assets';
import { OnboardingRoutes } from '../../components/navigation';
import { setAge } from '../../actions';

const MIN_AGE = 13;
const MAX_AGE = 120;
const propTypes = {
  setAge: PropTypes.func,
  navigation: PropTypes.object,
};

class AgeEntryScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header progress={0.75} onBackButtonPress={() => navigation.goBack()} />,
  });

  state = {
    age: undefined,
    errorMessage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    this.state.errorMessage !== prevState.errorMessage && LayoutAnimation.easeInEaseOut();
  }

  onChangeAge = (text) => {
    const age = !isNaN(text) && Number(text);
    const errorMessage =
      age && age < MIN_AGE
        ? 'You must be at least 13 years old'
        : age > MAX_AGE ? 'Please, enter your real age' : '';

    this.setState({ age, errorMessage });
  };

  onContinueButtonPress = () => {
    this.props.setAge(this.state.age);
    this.props.navigation.navigate(OnboardingRoutes.HeightEntry);
  };

  render() {
    const { age, errorMessage } = this.state;

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
            title={'Years'}
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

export const AgeEntry = connect(null, { setAge })(AgeEntryScreen);
