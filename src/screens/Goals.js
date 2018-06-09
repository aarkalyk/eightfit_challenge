import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import { connect } from 'react-redux';

import { OnboardingRoutes } from '../components/navigation';
import { animatedBackgroundViews, DelayedAppearance } from '../components/common';
import { GoalItem } from '../components/onboarding';
import { setGoal } from '../actions';
import { images } from '../assets';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const ANIMATON_DURATION = 800;

class GoalsScreen extends Component {
  static navigationOptions = { header: null };

  appIconMarginTop = new Animated.Value(SCREEN_HEIGHT / 2);

  componentDidMount() {
    Animated.timing(this.appIconMarginTop, {
      toValue: 40,
      duration: ANIMATON_DURATION,
    }).start();
  }

  onPress = () => {
    this.props.setGoal('lose_fat');
    this.props.navigation.navigate(OnboardingRoutes.AgeEntry);
  };

  renderBackgroundImages = () =>
    animatedBackgroundViews(
      <Image source={images.beans} style={{ alignSelf: 'center' }} />,
      <View style={{ alignItems: 'flex-end', flex: 1, justifyContent: 'flex-end', marginBottom: 40 }}>
        <Image source={images.mat} />
        <Image source={images.dumbell} style={{ position: 'absolute' }} />
      </View>,
    );

  renderAppIcon = () => {
    const height = this.appIconMarginTop.interpolate({
      inputRange: [40, SCREEN_HEIGHT / 2],
      outputRange: [44, 60],
    });
    const width = this.appIconMarginTop.interpolate({
      inputRange: [40, SCREEN_HEIGHT / 2],
      outputRange: [22, 30],
    });

    return <Animated.Image source={images.appIcon} style={{ marginTop: this.appIconMarginTop, height, width }} />;
  };

  render() {
    return (
      <ImageBackground source={images.backgroundGrain} style={styles.backgroundGrain}>
        {this.renderBackgroundImages()}
        <View style={styles.container}>
          {this.renderAppIcon()}
          <DelayedAppearance delay={ANIMATON_DURATION / 2}>
            <Text style={styles.welcomeText}>WELCOME TO 8FIT</Text>
          </DelayedAppearance>
          <DelayedAppearance delay={ANIMATON_DURATION / 2 + 100}>
            <Text style={styles.whatsYourGoalText}>{"What's your goal"}</Text>
          </DelayedAppearance>
          <View style={styles.goalsContainer}>
            <DelayedAppearance delay={ANIMATON_DURATION - 100}>
              <GoalItem onPress={this.onPress} />
            </DelayedAppearance>
            <DelayedAppearance delay={ANIMATON_DURATION}>
              <GoalItem />
            </DelayedAppearance>
            <DelayedAppearance delay={ANIMATON_DURATION + 100}>
              <GoalItem />
            </DelayedAppearance>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundGrain: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcomeText: {
    marginTop: 8,
    fontSize: 12,
  },
  whatsYourGoalText: {
    marginTop: 8,
    fontSize: 26,
    fontWeight: 'bold',
  },
  goalsContainer: {
    marginTop: 30,
    alignSelf: 'stretch',
  },
});

export const Goals = connect(null, { setGoal })(GoalsScreen);
