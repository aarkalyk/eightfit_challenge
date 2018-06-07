import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const MyTextInput = (props) => {
  const { style, onChangeText, value, title } = props;
  return (
    <View style={[styles.container, style]}>
      <TextInput
        maxLength={2}
        style={styles.textInput}
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
      />
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
