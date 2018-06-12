import { StyleSheet } from "react-native";

import { colors } from "./";

export const textStyles = StyleSheet.create({
	h1: {
		fontFamily: "FiraSans-Bold",
		fontSize: 32,
		color: colors.black,
	},
	h2: {
		fontFamily: "FiraSans-Bold",
		fontSize: 24,
		color: colors.black,
	},
	h3: {
		fontFamily: "FiraSans-Bold",
		fontSize: 20,
		color: colors.black,
	},
	body: {
		fontFamily: "FiraSans-Regular",
		fontSize: 16,
		color: colors.black,
	},
	bodySmall: {
		fontFamily: "FiraSans-Medium",
		fontSize: 12,
		color: colors.black,
	},
	caption: {
		fontFamily: "FiraSans-Medium",
		fontSize: 16,
		color: colors.black,
	},
});
