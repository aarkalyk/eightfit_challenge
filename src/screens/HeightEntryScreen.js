import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

import { Button, Header, TextInput } from '../components/common';
import { images } from '../assets';

const SegmentedControl = (props) => (
  <View
    style={[
      {
        flexDirection: 'row',
        height: 30,
        borderRadius: 15,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'black',
      },
      props.style,
    ]}
  >
    {props.titles.map((title, i) => {
      const isActive = i === props.currentIndex;
      return (
        <TouchableWithoutFeedback
          onPress={() => {
            props.onSelect(i);
          }}
          key={i}
        >
          <View style={{ backgroundColor: isActive ? 'black' : 'white', justifyContent: 'center' }}>
            <Text
              style={{ paddingHorizontal: 20, color: isActive ? 'white' : 'black', fontWeight: 'bold', fontSize: 16 }}
            >
              {title}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      );
    })}
  </View>
);

class HeightEntryScreen extends Component {
  static navigationOptions = {
    header: <Header />,
  };

  state = {
    heightUnits: 'cm',
    centimiters: undefined,
    feet: undefined,
    inches: undefined,
    errorMessage: '',
  };

  onChangeUnits = (index) => {
    const heightUnits = index === 0 ? 'cm' : 'ft';
    this.setState({ heightUnits });
  };

  renderTextInputs = () => {
    const { centimiters, heightUnits } = this.state;
    return heightUnits === 'cm' ? (
      <TextInput
        onChangeText={this.onChangeAge}
        value={centimiters ? `${centimiters}` : ''}
        title="Cm"
        style={{ marginHorizontal: 25 }}
      />
    ) : (
      <View style={{ flexDirection: 'row', alignSelf: 'stretch' }}>
        <TextInput
          onChangeText={this.onChangeAge}
          value={centimiters ? `${centimiters}` : ''}
          title="Ft"
          style={{ flex: 0.5, marginLeft: 25, marginRight: 12.5 }}
        />
        <TextInput
          onChangeText={this.onChangeAge}
          value={centimiters ? `${centimiters}` : ''}
          title="In"
          style={{ flex: 0.5, marginRight: 25, marginLeft: 12.5 }}
        />
      </View>
    );
  };

  render() {
    const { centimiters, errorMessage, heightUnits } = this.state;
    return (
      <View style={{ alignItems: 'center', flex: 1, backgroundColor: 'white', justifyContent: 'space-between' }}>
        <View style={{ alignSelf: 'stretch', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 25 }}>{"What's your height?"}</Text>
          {errorMessage && <Text style={{ color: 'red', marginTop: 5 }}>{errorMessage}</Text>}
          {this.renderTextInputs()}
          <SegmentedControl
            style={{ marginTop: 15 }}
            titles={['cm', 'ft']}
            onSelect={this.onChangeUnits}
            currentIndex={heightUnits === 'cm' ? 0 : 1}
          />
        </View>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={64}>
          <Button onPress={this.onContinueButtonPress} disabled={!this.state.age} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export { HeightEntryScreen };
