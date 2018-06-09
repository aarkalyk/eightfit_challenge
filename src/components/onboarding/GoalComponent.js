import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

import { images, colors } from '../../assets';

export const GoalComponent = ({ onPress, goal }) => (
  <TouchableOpacity onPress={() => onPress(goal.type)}>
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{goal.displayTitle}</Text>
        <Text style={styles.subtitle}>{goal.displaySubtitle}</Text>
      </View>
      <Image source={images.chevronRight} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    height: 100,
    marginTop: 20,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: colors.black,
    shadowOpacity: 0.2,
  },
  textContainer: {
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 4,
  },
});
