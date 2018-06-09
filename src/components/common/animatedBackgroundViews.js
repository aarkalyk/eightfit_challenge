import React, { Component } from 'react';
import { View, Animated, Dimensions, StyleSheet } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const ANIMATION_DURATION = 1000;

export const animatedBackgroundViews = (LeftComponent, RightComponent) => {
  class AnimatedBackground extends Component {
    constructor(props) {
      super(props);
      this.leftComponentMarginLeft = new Animated.Value(-SCREEN_WIDTH / 2);
      this.rightComponentMarginRight = new Animated.Value(-SCREEN_WIDTH / 2);
    }

    componentDidMount() {
      Animated.timing(this.leftComponentMarginLeft, {
        toValue: 0,
        duration: ANIMATION_DURATION,
      }).start();
      Animated.timing(this.rightComponentMarginRight, {
        toValue: 0,
        duration: ANIMATION_DURATION,
      }).start();
    }

    render() {
      return (
        <View style={styles.mainContainer}>
          <Animated.View
            style={[{ marginLeft: this.leftComponentMarginLeft }, styles.animatedContainer]}
          >
            {LeftComponent}
          </Animated.View>
          <Animated.View
            style={[{ marginRight: this.rightComponentMarginRight }, styles.animatedContainer]}
          >
            {RightComponent}
          </Animated.View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    mainContainer: {
      position: 'absolute',
      flexDirection: 'row',
      flex: 1,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: 'space-between',
    },
    animatedContainer: {
      flexDirection: 'row',
      bottom: 0,
      top: 0,
    },
  });

  return <AnimatedBackground />;
};
