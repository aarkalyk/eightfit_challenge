import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { images, colors } from "../../assets";

const marginPercentage = (progress) => `${(1.0 - progress) * 100}%`;
const propTypes = {
	progress: PropTypes.number,
	onBackButtonPress: PropTypes.func,
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

export const Header = ({ progress, onBackButtonPress, style }) => (
	<View style={[styles.mainContainer, style]}>
		<View style={[styles.innerContainer, style]}>
			<TouchableOpacity onPress={onBackButtonPress} style={styles.touchableOpacity}>
				<Image source={images.leftArrow} />
			</TouchableOpacity>
		</View>
		{progress && <View style={[styles.progressBar, { marginRight: marginPercentage(progress) }]} />}
	</View>
);

Header.propTypes = propTypes;

const styles = StyleSheet.create({
	mainContainer: {
		height: 68,
		justifyContent: "space-between",
		backgroundColor: "white",
	},
	innerContainer: {
		flex: 1,
		borderBottomColor: colors.grayLight,
		borderBottomWidth: 1,
		marginBottom: 3,
	},
	progressBar: {
		backgroundColor: colors.green,
		height: 4,
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
	},
	touchableOpacity: {
		height: 44,
		width: 44,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 15,
	},
});
