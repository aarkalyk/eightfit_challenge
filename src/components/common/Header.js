import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { images } from '../../assets';

export const Header = (props) => (
  <View style={styles.container}>
    <Image source={images.leftArrow} style={styles.image} />
    <View style={styles.progressBar} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 68,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  image: {
    marginLeft: 15,
    marginTop: 24,
  },
  progressBar: {
    backgroundColor: 'green',
    alignSelf: 'stretch',
    height: 4,
    marginRight: '25%',
  },
});
