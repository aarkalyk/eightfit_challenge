import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { colors } from '../../assets';

export const Button = ({ disabled, onPress, style, title }) => (
  <TouchableOpacity disabled={disabled} onPress={onPress}>
    <View
      style={[
        styles.titleContainer,
        style,
        { backgroundColor: disabled ? colors.gray : colors.black },
      ]}
    >
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
