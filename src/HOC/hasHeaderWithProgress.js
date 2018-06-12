import React, { Component } from 'react';

import { Header } from '../components/common';

export const hasHeaderWithProgress = (progress) => (WrappedComponent) => {
  class WrappingComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
      header: <Header progress={progress} onBackButtonPress={() => navigation.goBack()} />,
    });

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WrappingComponent;
};
