import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { colors, textStyles } from '../../assets';

const propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  title: PropTypes.string,
};

export const Button = ({ disabled, onPress, style, title }) => (
  <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.touchableOpacity}>
    <View
      style={[
        styles.titleContainer,
        style,
        { backgroundColor: disabled ? colors.gray : colors.black },
      ]}
    >
      <Text style={[textStyles.caption, styles.title]}>{title}</Text>
    </View>
  </TouchableOpacity>
);

Button.propTypes = propTypes;

const styles = StyleSheet.create({
  touchableOpacity: {
    alignSelf: 'center',
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
  },
});
