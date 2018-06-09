import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { images } from '../../assets';

const marginPercentage = (progress) => `${(1.0 - progress) * 100}%`;

export const Header = ({ progress, onBackButtonPress, style }) => (
  <View style={[styles.container, style]}>
    <TouchableOpacity onPress={onBackButtonPress} style={styles.touchableOpacity}>
      <Image source={images.leftArrow} />
    </TouchableOpacity>
    {progress && <View style={[styles.progressBar, { marginRight: marginPercentage(progress) }]} />}
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 68,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  progressBar: {
    backgroundColor: 'green',
    alignSelf: 'stretch',
    height: 4,
  },
  touchableOpacity: {
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
});
