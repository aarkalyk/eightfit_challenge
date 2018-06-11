import React from 'react';
import { TextInput, View, Text, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';

import { colors, textStyles } from '../../assets';

const MyTextInput = (props) => {
  const { title, style, hasError, ...textInputProps } = props;

  return (
    <View style={[styles.container, style, { borderBottomColor: hasError ? 'red' : colors.gray }]}>
      <TextInput
        style={[styles.textInput, textStyles.h1]}
        keyboardType="numeric"
        {...textInputProps}
        underlineColorAndroid="transparent"
      />
      <Text style={[textStyles.bodySmall, styles.title]}>{title}</Text>
    </View>
  );
};

MyTextInput.propTypes = {
  title: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  hasError: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    alignItems: 'flex-end',
  },
  textInput: {
    textAlign: 'right',
    height: '100%',
    flex: 0.55,
    paddingTop: 0,
    paddingBottom: 0,
    height: 44,
  },
  title: {
    marginLeft: 5,
    marginBottom: 5,
    color: colors.grayLight,
  },
});

export { MyTextInput as TextInput };
