import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';

import { images } from '../assets';

const SCREEN_WIDTH = Dimensions.get('window').width;

const GoalItemView = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View
      style={{
        backgroundColor: 'white',
        height: 100,
        marginTop: 20,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
      }}
    >
      <View style={{ justifyContent: 'space-evenly' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 4 }}>Lose weight</Text>
        <Text style={{ fontSize: 16, marginVertical: 4 }}>Burn fat & get lean</Text>
      </View>
      <Image source={images.chevronRight} />
    </View>
  </TouchableOpacity>
);

class GoalsScreen extends Component {
  static navigationOptions = { header: null };

  onPress = () => this.props.navigation.navigate('AgeEntry');

  render() {
    return (
      <ImageBackground source={images.backgroundGrain} style={styles.backgroundGrain}>
        <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image source={images.beans} />
          <View style={{ alignItems: 'flex-end', flex: 1, justifyContent: 'flex-end', marginBottom: -40 }}>
            <Image source={images.mat} />
            <Image source={images.dumbell} style={{ marginTop: -270 }} />
          </View>
        </View>
        <View style={styles.container}>
          <Image source={images.appIcon} style={{ marginTop: 50 }} />
          <Text style={{ marginTop: 8, fontSize: 12 }}>WELCOME TO 8FIT</Text>
          <Text style={{ marginTop: 8, fontSize: 26, fontWeight: 'bold' }}>{"What's your goal"}</Text>
          <View style={{ marginTop: 30, alignSelf: 'stretch' }}>
            <GoalItemView onPress={this.onPress} />
            <GoalItemView />
            <GoalItemView />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundGrain: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export { GoalsScreen };
