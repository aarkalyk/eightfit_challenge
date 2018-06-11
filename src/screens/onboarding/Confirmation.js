import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { images, colors, textStyles } from '../../assets';
import {
  Button,
  Header,
  animatedBackgroundViews,
  DelayedAppearance,
} from '../../components/common';
import { GoalItems } from '../../utils/constants';
import { Converter } from '../../utils/Converter';

const FIRST_ANIMATION_DELAY = 100;
const ANIMATION_INTERVAL = 100;
const propTypes = {
  userData: PropTypes.shape({
    Goal: PropTypes.string,
    Age: PropTypes.string,
    Height: PropTypes.string,
  }),
};

class ConfirmationScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  renderBackgroundImages() {
    return animatedBackgroundViews()(
      <Image source={images.beans} style={styles.beansImage} />,
      <Image source={images.parsley} style={styles.parsleyImage} />,
    );
  }

  renderTitle() {
    return (
      <DelayedAppearance delay={FIRST_ANIMATION_DELAY}>
        <Text style={[styles.title, textStyles.h2]}>Confirm your details:</Text>
      </DelayedAppearance>
    );
  }

  renderHeader = () => (
    <Header style={styles.header} onBackButtonPress={() => this.props.navigation.goBack()} />
  );

  renderDetailsTable = () => (
    <DelayedAppearance delay={FIRST_ANIMATION_DELAY + ANIMATION_INTERVAL}>
      <View style={styles.userDataContainer}>
        {Object.keys(this.props.userData).map((key, i) => {
          const borderBottomWidth = i < 2 ? 1 : 0;

          return (
            <View style={[styles.userDataItemContainer, { borderBottomWidth }]} key={i}>
              <Text style={textStyles.caption}>{key}</Text>
              <Text style={[styles.userDataItemValue, textStyles.body]}>{`${
                this.props.userData[key]
              }`}</Text>
            </View>
          );
        })}
      </View>
    </DelayedAppearance>
  );

  render() {
    return (
      <ImageBackground source={images.backgroundGrain} style={styles.imageBackground}>
        {this.renderBackgroundImages()}
        <View style={styles.mainContainer}>
          <View>
            {this.renderHeader()}
            {this.renderTitle()}
            {this.renderDetailsTable()}
          </View>
          <DelayedAppearance delay={FIRST_ANIMATION_DELAY + ANIMATION_INTERVAL * 2}>
            <Button title="Save" style={styles.saveButton} />
          </DelayedAppearance>
        </View>
      </ImageBackground>
    );
  }
}

ConfirmationScreen.propTypes = propTypes;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  beansImage: {
    alignSelf: 'flex-end',
    marginBottom: -220,
  },
  parsleyImage: {
    marginTop: 60,
  },
  header: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  },
  title: {
    alignSelf: 'center',
    marginTop: 40,
  },
  saveButton: {
    marginBottom: 20,
  },
  userDataContainer: {
    marginTop: 40,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.grayLight,
    overflow: 'hidden',
  },
  userDataItemContainer: {
    marginLeft: 10,
    borderBottomColor: colors.grayUltraLight,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userDataItemValue: {
    marginRight: 10,
  },
});

const mapStateToProps = ({ user }) => {
  const { goalType, age, height } = user;
  const Goal = GoalItems[goalType].displayTitle;
  const Age = `${age} years`;
  const Height = Converter.displayStringForHeight(height);

  return {
    userData: {
      Goal,
      Age,
      Height,
    },
  };
};

export const Confirmation = connect(mapStateToProps)(ConfirmationScreen);
