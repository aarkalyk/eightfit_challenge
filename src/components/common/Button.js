import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Button = ({ disabled, onPress }) => (
  <TouchableOpacity style={styles.touchableOpacity} disabled={disabled} onPress={onPress}>
    <View style={[styles.titleContainer, { backgroundColor: disabled ? 'gray' : 'black' }]}>
      <Text style={styles.title}>Continue</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  touchableOpacity: {
    marginBottom: 15,
  },
  titleContainer: {
    borderRadius: 22,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    paddingHorizontal: 25,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
