import React, { Component } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { connect } from 'react-redux';

import { images } from '../assets';
import { Button } from '../components/common';

class ConfirmationScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  renderDetailsTable = () => (
    <View
      style={{
        marginTop: 40,
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        overflow: 'hidden',
      }}
    >
      {Object.keys(this.props.userData).map((key, i) => {
        const borderBottomWidth = i < 2 ? 1 : 0;

        return (
          <View
            style={{
              marginLeft: 10,
              borderBottomColor: 'gray',
              borderBottomWidth,
              height: 60,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            key={i}
          >
            <Text style={{ fontSize: 16 }}>{key}</Text>
            <Text style={{ marginRight: 10 }}>{`${this.props.userData[key]}`}</Text>
          </View>
        );
      })}
    </View>
  );

  render() {
    return (
      <ImageBackground source={images.backgroundGrain} style={{ flex: 1 }}>
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            flex: 1,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: 'space-between',
          }}
        >
          <Image source={images.beans} style={{ alignSelf: 'flex-end', marginBottom: -220 }} />
          <Image source={images.parsley} style={{ marginTop: 60 }} />
        </View>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View style={{ justifyContent: 'center', flex: 0.8 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>Confirm your details:</Text>
            {this.renderDetailsTable()}
          </View>
          <Button title="Save" style={{ marginBottom: 20 }} />
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({ onboarding }) => {
  const { goal, age, height } = onboarding;
  const Goal = goal;
  const Age = `${age} years`;
  const Height = height.measureUnits === 'cm' ? `${height.centimiters}cm` : `${height.feet}ft ${height.inches}in`;

  return {
    userData: {
      Goal,
      Age,
      Height,
    },
  };
};

export const Confirmation = connect(mapStateToProps)(ConfirmationScreen);
