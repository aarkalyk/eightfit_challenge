import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

import { images, colors, textStyles } from '../../assets';

export const GoalComponent = ({ onPress, goal }) => (
  <TouchableOpacity onPress={() => onPress(goal.type)}>
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, textStyles.h3]}>{goal.displayTitle}</Text>
        <Text style={[styles.subtitle, textStyles.body]}>{goal.displaySubtitle}</Text>
      </View>
      <Image source={images.chevronRight} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    height: 100,
    marginBottom: 20,
    marginTop: 4,
    paddingHorizontal: 15,
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
