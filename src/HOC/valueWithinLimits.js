import React, { Component } from 'react';
import { LayoutAnimation } from 'react-native';

export const valueWithinLimits = (minValue, maxValue, errorMessage) => (WrappedComponent) =>
  class extends Component {
    state = {
      errorMessage: '',
    };

    componentDidUpdate(_, prevState) {
      this.state.errorMessage !== prevState.errorMessage && LayoutAnimation.easeInEaseOut();
    }

    validateValue = (value) => {
      const message = value && (value < minValue || value > maxValue) ? errorMessage : '';
      this.setState({ errorMessage: message });
    };

    render() {
      return (
        <WrappedComponent {...this.props} {...this.state} validateValue={this.validateValue} />
      );
    }
  };
