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
import PropTypes from 'prop-types';

import { OnboardingRoutes } from '../../components/navigation';
import { animatedBackgroundViews, DelayedAppearance } from '../../components/common';
import { GoalComponent } from '../../components/onboarding';
import { setGoal } from '../../actions';
import { images, textStyles } from '../../assets';
import { GoalItems } from '../../utils/constants';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const ICON_ANIMATON_DURATION = 700;
const ANIMATION_INTERVAL = 100;

class GoalsScreen extends Component {
  state = {
    appIconTransateY: new Animated.Value(SCREEN_HEIGHT / 2),
  };

  static navigationOptions = { header: null };

  componentDidMount() {
    Animated.timing(this.state.appIconTransateY, {
      toValue: 40,
      duration: ICON_ANIMATON_DURATION,
      useNativeDriver: true,
    }).start();
  }

  onGoalItemPress = (goalType) => {
    this.props.setGoal(goalType);
    this.props.navigation.navigate(OnboardingRoutes.AgeEntry);
  };

  renderBackgroundImages() {
    return animatedBackgroundViews(ICON_ANIMATON_DURATION)(
      <Image source={images.beans} style={styles.beansImage} />,
      <View style={styles.dumbellImageContainer}>
        <Image source={images.mat} />
        <Image source={images.dumbell} style={styles.dumbellImage} />
      </View>,
    );
  }

  renderTitles() {
    return (
      <View style={styles.titlesContainer}>
        <DelayedAppearance delay={ICON_ANIMATON_DURATION - ANIMATION_INTERVAL}>
          <Text style={[styles.welcomeText, textStyles.bodySmall]}>WELCOME TO 8FIT</Text>
        </DelayedAppearance>
        <DelayedAppearance delay={ICON_ANIMATON_DURATION}>
          <Text style={[styles.whatsYourGoalText, textStyles.h2]}>{"What's your goal"}</Text>
        </DelayedAppearance>
      </View>
    );
  }

  renderAppIcon = () => {
    const { appIconTransateY } = this.state;
    const scaleY = appIconTransateY.interpolate({
      inputRange: [40, SCREEN_HEIGHT / 2],
      outputRange: [1, 2],
    });
    const scaleX = appIconTransateY.interpolate({
      inputRange: [40, SCREEN_HEIGHT / 2],
      outputRange: [1, 2],
    });

    return (
      <Animated.Image
        source={images.appIcon}
        style={{
          transform: [{ translateY: appIconTransateY }, { scaleX }, { scaleY }],
        }}
      />
    );
  };

  renderGoals = () => {
    let delay = ICON_ANIMATON_DURATION;

    return (
      <View style={styles.goalsContainer}>
        {Object.keys(GoalItems).map((key, i) => {
          const goalItem = GoalItems[key];
          delay += ANIMATION_INTERVAL;

          return (
            <DelayedAppearance delay={delay} key={i}>
              <GoalComponent onPress={this.onGoalItemPress} goalItem={goalItem} />
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
    marginTop: 50,
  },
  whatsYourGoalText: {
    marginTop: 20,
  },
  goalsContainer: {
    marginTop: 30,
    alignSelf: 'stretch',
  },
  dumbellImageContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 40,
    overflow: 'visible',
  },
  beansImage: {
    alignSelf: 'center',
  },
  dumbellImage: {
    position: 'absolute',
    left: 0,
  },
});

GoalsScreen.propTypes = {
  setGoal: PropTypes.func,
  navigation: PropTypes.object,
};

export const Goals = connect(null, { setGoal })(GoalsScreen);
