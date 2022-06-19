import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { COLORS, FONTS } from "../index";

const screenWidth = Dimensions.get("screen").width;
function SelectHeader({ counter, navigate }) {
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={navigate}>
        <Icon name="arrow-left" size={30} color="white" />
      </TouchableOpacity>
      <Text style={s.header}>SELECT CONTACTS</Text>
      <Text style={s.counter}>{counter}</Text>
      <Icon name="account" size={25} color="white" />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    width: screenWidth,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 15,
    backgroundColor: COLORS.starblue,
  },
  header: {
    fontFamily: FONTS.regular,
    color: "white",
    marginLeft: 14,
    fontSize: 16,
  },
  counter: {
    fontFamily: FONTS.regular,
    color: "white",
    fontSize: 16,
    marginLeft: "auto",
    marginRight: 4,
  },
});

export default SelectHeader;
