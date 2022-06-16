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
function SelectHeader({ counter }) {
  return (
    <View style={s.container}>
      <TouchableOpacity>
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
    height: 120,
    backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 15,
    backgroundColor: COLORS.starblue,
    height: 100,
    width: screenWidth,
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
