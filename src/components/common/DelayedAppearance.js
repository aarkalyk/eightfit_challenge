import React, { Component } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

const INITIAL_TRANSLATE_Y = 10;
const propTypes = {
  children: PropTypes.element,
  delay: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

class DelayedAppearance extends Component {
  state = {
    translateY: new Animated.Value(INITIAL_TRANSLATE_Y),
  };

  componentDidMount() {
    this.timeout = setTimeout(() => {
      Animated.timing(this.state.translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, this.props.delay);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { translateY } = this.state;
    const opacity = translateY.interpolate({
      inputRange: [0, INITIAL_TRANSLATE_Y],
      outputRange: [1, 0],
    });

    return (
      <Animated.View style={[this.props.style, { opacity, transform: [{ translateY }] }]}>
        {this.props.children}
      </Animated.View>
    );
  }
}

DelayedAppearance.propTypes = propTypes;

export { DelayedAppearance };
