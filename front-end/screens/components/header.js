import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { COLORS, FONTS } from "../index";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const screenWidth = Dimensions.get("screen").width;
function Header({ icon, text }) {
  return (
    <View style={s.container}>
      <Icon name={icon} size={30} color="white" />
      <Text style={s.header}>{text}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    width: screenWidth,
    height: 80,
    backgroundColor: COLORS.starblue,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    // marginBottom: 15,
  },
  header: {
    fontFamily: FONTS.regular,
    color: "white",
    marginLeft: 14,
    fontSize: 20,
  },
});

export default Header;
