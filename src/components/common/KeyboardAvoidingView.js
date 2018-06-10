import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import PropTypes from 'prop-types';

const MyKeyboardAvoidingView = (props) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'position' : null}
    keyboardVerticalOffset={64}
  >
    {props.children}
  </KeyboardAvoidingView>
);

MyKeyboardAvoidingView.propTypes = {
  children: PropTypes.element,
};

export { MyKeyboardAvoidingView as KeyboardAvoidingView };
