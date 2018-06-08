import React from 'react';
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';

export const SegmentedControl = ({ style, titles, currentIndex, onSelect }) => (
  <View style={[styles.container, style]}>
    {titles.map((title, i) => {
      const isActive = i === currentIndex;
      const backgroundColor = isActive ? 'black' : 'white';
      const titleColor = isActive ? 'white' : 'black';
      const borderRightWidth = titles.length - 1 > i ? 1 : 0; // in case there are more than 2 items

      return (
        <TouchableWithoutFeedback onPress={() => onSelect(title, i)} key={i}>
          <View
            style={[
              {
                backgroundColor,
                borderRightWidth,
              },
              styles.titleContainer,
            ]}
          >
            <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'black',
  },
  titleContainer: {
    justifyContent: 'center',
    borderRightColor: 'black',
  },
  title: {
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
