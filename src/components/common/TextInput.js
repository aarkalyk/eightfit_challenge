import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const MyTextInput = (props) => {
  const { title, style, ...textInputProps } = props;
  return (
    <View style={[styles.container, style]}>
      <TextInput style={styles.textInput} keyboardType="numeric" {...textInputProps} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    height: 44,
    alignSelf: 'stretch',
    alignItems: 'flex-end',
  },
  textInput: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'right',
    height: '100%',
    flex: 0.55,
  },
  title: {
    marginLeft: 5,
    marginBottom: 5,
    color: 'gray',
  },
});

export { MyTextInput as TextInput };
