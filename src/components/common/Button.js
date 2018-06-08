import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Button = ({ disabled, onPress, style, title }) => (
  <TouchableOpacity disabled={disabled} onPress={onPress}>
    <View style={[styles.titleContainer, style, { backgroundColor: disabled ? 'gray' : 'black' }]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  titleContainer: {
    borderRadius: 22,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    paddingHorizontal: 25,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
