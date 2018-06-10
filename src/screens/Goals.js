import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { connect } from 'react-redux';

import { OnboardingRoutes } from '../components/navigation';
import { animatedBackgroundViews, DelayedAppearance } from '../components/common';
import { GoalComponent } from '../components/onboarding';
import { setGoal } from '../actions';
import { images } from '../assets';
import { GoalItems } from '../utils/constants';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const ICON_ANIMATON_DURATION = 800;

class GoalsScreen extends Component {
  state = {
    appIconMarginTop: new Animated.Value(SCREEN_HEIGHT / 2),
  };

  static navigationOptions = { header: null };

  componentDidMount() {
    Animated.timing(this.state.appIconMarginTop, {
      toValue: 40,
      duration: ICON_ANIMATON_DURATION,
    }).start();
  }

  onGoalItemPress = (goalType) => {
    this.props.setGoal(goalType);
    this.props.navigation.navigate(OnboardingRoutes.AgeEntry);
  };

  renderBackgroundImages = () =>
    animatedBackgroundViews(
      <Image source={images.beans} style={styles.beansImage} />,
      <View style={styles.dumbellImageContainer}>
        <Image source={images.mat} />
        <Image source={images.dumbell} style={styles.dumbellImage} />
      </View>,
    );

  renderAppIcon = () => {
    const { appIconMarginTop } = this.state;
    const height = appIconMarginTop.interpolate({
      inputRange: [40, SCREEN_HEIGHT / 2],
      outputRange: [44, 60],
    });
    const width = appIconMarginTop.interpolate({
      inputRange: [40, SCREEN_HEIGHT / 2],
      outputRange: [22, 30],
    });

    return (
      <Animated.Image
        source={images.appIcon}
        style={{ marginTop: appIconMarginTop, height, width }}
      />
    );
  };

  renderTitles = () => (
    <View style={styles.titlesContainer}>
      <DelayedAppearance delay={ICON_ANIMATON_DURATION / 2}>
        <Text style={styles.welcomeText}>WELCOME TO 8FIT</Text>
      </DelayedAppearance>
      <DelayedAppearance delay={ICON_ANIMATON_DURATION / 2 + 100}>
        <Text style={styles.whatsYourGoalText}>{"What's your goal"}</Text>
      </DelayedAppearance>
    </View>
  );

  renderGoals = () => {
    let delay = ICON_ANIMATON_DURATION - 200;

    return (
      <View style={styles.goalsContainer}>
        {Object.keys(GoalItems).map((key, i) => {
          const goal = GoalItems[key];
          delay += 100;

          return (
            <DelayedAppearance delay={delay} key={i}>
              <GoalComponent onPress={this.onGoalItemPress} goal={goal} />
            </DelayedAppearance>
          );
        })}
      </View>
    );
  };

  render() {
    return (
      <ImageBackground source={images.backgroundGrain} style={styles.backgroundGrain}>
        {this.renderBackgroundImages()}
        <View style={styles.container}>
          {this.renderAppIcon()}
          {this.renderTitles()}
          {this.renderGoals()}
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
  titlesContainer: {
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
  dumbellImageContainer: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
  beansImage: {
    alignSelf: 'center',
  },
  dumbellImage: {
    position: 'absolute',
  },
});

export const Goals = connect(null, { setGoal })(GoalsScreen);
