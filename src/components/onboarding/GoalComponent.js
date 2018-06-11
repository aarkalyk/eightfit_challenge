import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { images, colors, textStyles } from '../../assets';

export const GoalComponent = ({ onPress, goalItem }) => (
  <TouchableOpacity onPress={() => onPress(goalItem.type)}>
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, textStyles.h3]}>{goalItem.displayTitle}</Text>
        <Text style={[styles.subtitle, textStyles.body]}>{goalItem.displaySubtitle}</Text>
      </View>
      <Image source={images.chevronRight} />
    </View>
  </TouchableOpacity>
);

GoalComponent.propTypes = {
  onPress: PropTypes.func,
  goalItem: PropTypes.shape({
    type: PropTypes.string,
    displayTitle: PropTypes.string,
    displaySubtitle: PropTypes.string,
  }),
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    height: 100,
    marginBottom: 20,
    marginTop: 4,
    paddingRight: 15,
    paddingLeft: 25,
    borderRadius: 5,
    marginHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 3,
  },
  textContainer: {
    justifyContent: 'space-evenly',
  },
  title: {
    marginVertical: 4,
  },
  subtitle: {
    marginVertical: 4,
  },
});
