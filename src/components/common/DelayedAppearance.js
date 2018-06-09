import React, { Component } from 'react';
import { View, Animated } from 'react-native';

const INITIAL_MARGIN_TOP = 10;

class DelayedAppearance extends Component {
  constructor(props) {
    super(props);
    this.marginTop = new Animated.Value(INITIAL_MARGIN_TOP);
  }

  componentDidMount() {
    setTimeout(() => {
      Animated.timing(this.marginTop, {
        toValue: 0,
        duration: 500,
      }).start();
    }, this.props.delay);
  }

  render() {
    const opacity = this.marginTop.interpolate({
      inputRange: [0, INITIAL_MARGIN_TOP],
      outputRange: [1, 0],
    });
    return (
      <Animated.View style={[this.props.style, { marginTop: this.marginTop, opacity }]}>
        {this.props.children}
      </Animated.View>
    );
  }
}

export { DelayedAppearance };
