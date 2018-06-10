import React, { Component } from 'react';
import { View, Animated, Dimensions, StyleSheet } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const INITIAL_TRANSLATE_X_LEFT = -SCREEN_WIDTH / 2;

export const animatedBackgroundViews = (duration = 1000) => (LeftComponent, RightComponent) => {
  class AnimatedBackground extends Component {
    state = {
      translateXLeftItem: new Animated.Value(INITIAL_TRANSLATE_X_LEFT),
    };

    componentDidMount() {
      Animated.timing(this.state.translateXLeftItem, {
        toValue: 0,
        duration,
        useNativeDriver: true,
      }).start();
    }

    render() {
      const { translateXLeftItem } = this.state;
      const translateXRightItem = translateXLeftItem.interpolate({
        inputRange: [INITIAL_TRANSLATE_X_LEFT, 0],
        outputRange: [-INITIAL_TRANSLATE_X_LEFT, 0],
      });

      return (
        <View style={styles.mainContainer}>
          <Animated.View
            style={[{ transform: [{ translateX: translateXLeftItem }] }, styles.animatedContainer]}
          >
            {LeftComponent}
          </Animated.View>
          <Animated.View
            style={[{ transform: [{ translateX: translateXRightItem }] }, styles.animatedContainer]}
          >
            {RightComponent}
          </Animated.View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: 'row',
      position: 'absolute',
      justifyContent: 'space-between',
    },
    animatedContainer: {
      top: 0,
      bottom: 0,
      flexDirection: 'row',
    },
  });

  return <AnimatedBackground />;
};
