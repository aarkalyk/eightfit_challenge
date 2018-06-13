import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground, Animated } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { OnboardingRoutes } from '../../components/navigation';
import { animatedBackgroundViews, DelayedAppearance } from '../../components/common';
import { GoalComponent } from '../../components/onboarding';
import { setGoal } from '../../actions';
import { images, textStyles } from '../../assets';
import { GoalItems } from '../../utils/constants';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const ICON_ANIMATON_DURATION = 500;
const ANIMATION_INTERVAL = 60;
const propTypes = {
  setGoal: PropTypes.func,
  navigation: PropTypes.object,
};

class GoalsScreen extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);

    this.state = {
      appIconTransateY: new Animated.Value(SCREEN_HEIGHT / 2),
    };

    this.animatedBackgroundViews = animatedBackgroundViews(ICON_ANIMATON_DURATION)(
      <Image source={images.beans} style={styles.beansImage} />,
      <View style={styles.dumbellImageContainer}>
        <Image source={images.mat} />
        <Image source={images.dumbell} style={styles.dumbellImage} />
      </View>,
    );
  }

  componentDidMount() {
    Animated.timing(this.state.appIconTransateY, {
      toValue: 40,
      duration: ICON_ANIMATON_DURATION,
      useNativeDriver: true,
    }).start();
  }

  onGoalItemPress = (goal) => {
    this.props.setGoal(goal);
    this.props.navigation.navigate(OnboardingRoutes.AgeEntry);
  };

  renderTitles() {
    return (
      <View style={styles.titlesContainer}>
        <DelayedAppearance delay={ICON_ANIMATON_DURATION - ANIMATION_INTERVAL}>
          <Text style={[styles.welcomeText, textStyles.bodySmall]}>WELCOME TO 8FIT</Text>
        </DelayedAppearance>
        <DelayedAppearance delay={ICON_ANIMATON_DURATION}>
          <Text style={[styles.whatsYourGoalText, textStyles.h2]}>{"What's your goal?"}</Text>
        </DelayedAppearance>
      </View>
    );
  }

  renderAppIcon = () => {
    const { appIconTransateY } = this.state;
    const scaleX = appIconTransateY.interpolate({
      inputRange: [40, SCREEN_HEIGHT / 2],
      outputRange: [1, 2],
    });

    return (
      <Animated.Image
        source={images.appIcon}
        style={{
          transform: [{ translateY: appIconTransateY }, { scaleX }, { scaleY: scaleX }],
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
        {this.animatedBackgroundViews}
        <View style={styles.container}>
          {this.renderAppIcon()}
          {this.renderTitles()}
          {this.renderGoals()}
        </View>
      </ImageBackground>
    );
  }
}

GoalsScreen.propTypes = propTypes;

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
    marginBottom: 10,
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

export const Goals = connect(null, { setGoal })(GoalsScreen);
