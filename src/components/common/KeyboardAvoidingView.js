import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

const MyKeyboardAvoidingView = (props) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'position' : null}
    keyboardVerticalOffset={64}
  >
    {props.children}
  </KeyboardAvoidingView>
);

export { MyKeyboardAvoidingView as KeyboardAvoidingView };
