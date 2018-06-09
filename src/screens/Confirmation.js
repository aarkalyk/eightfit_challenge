import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { images, colors } from '../assets';
import { Button, Header, animatedBackgroundViews, DelayedAppearance } from '../components/common';
import { GoalItems } from '../utils/constants';

const FIRST_DELAY = 100;

class ConfirmationScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  renderDetailsTable = () => (
    <DelayedAppearance delay={FIRST_DELAY + 100}>
      <View style={styles.userDataContainer}>
        {Object.keys(this.props.userData).map((key, i) => {
          const borderBottomWidth = i < 2 ? 1 : 0;

          return (
            <View style={[styles.userDataItemContainer, { borderBottomWidth }]} key={i}>
              <Text style={styles.userDataItemTitle}>{key}</Text>
              <Text style={styles.userDataItemValue}>{`${this.props.userData[key]}`}</Text>
            </View>
          );
        })}
      </View>
    </DelayedAppearance>
  );

  render() {
    return (
      <ImageBackground source={images.backgroundGrain} style={styles.imageBackground}>
        {animatedBackgroundViews(
          <Image source={images.beans} style={styles.beansImage} />,
          <Image source={images.parsley} style={styles.parsleyImage} />,
        )}
        <View style={styles.mainContainer}>
          <View>
            <Header
              style={styles.header}
              onBackButtonPress={() => this.props.navigation.goBack()}
            />
            <DelayedAppearance delay={FIRST_DELAY}>
              <Text style={styles.title}>Confirm your details:</Text>
            </DelayedAppearance>
            {this.renderDetailsTable()}
          </View>
          <DelayedAppearance delay={FIRST_DELAY + 200}>
            <Button title="Save" style={styles.saveButton} />
          </DelayedAppearance>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  beansImage: {
    alignSelf: 'flex-end',
    marginBottom: -220,
  },
  parsleyImage: {
    marginTop: 60,
  },
  header: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 40,
  },
  saveButton: {
    marginBottom: 20,
  },
  userDataContainer: {
    marginTop: 40,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.grayLight,
    overflow: 'hidden',
  },
  userDataItemContainer: {
    marginLeft: 10,
    borderBottomColor: colors.grayUltraLight,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userDataItemTitle: {
    fontSize: 16,
  },
  userDataItemValue: {
    marginRight: 10,
  },
});

const mapStateToProps = ({ onboarding }) => {
  const { goalType, age, height } = onboarding;
  const Goal = GoalItems[goalType].displayTitle;
  const Age = `${age} years`;
  const Height = `${height}cm`;

  return {
    userData: {
      Goal,
      Age,
      Height,
    },
  };
};

export const Confirmation = connect(mapStateToProps)(ConfirmationScreen);
