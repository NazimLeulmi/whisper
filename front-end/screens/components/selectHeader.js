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
function SelectHeader({}) {
  return (
    <View style={s.container}>
      <TouchableOpacity>
        <Icon name="arrow-left" size={30} color={COLORS.feiryrose} />
      </TouchableOpacity>
      <Text style={s.header}>SELECT CONTACTS</Text>
      <Text style={s.counter}>0</Text>
      <Icon name="account" size={25} color={COLORS.feiryrose} />
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
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 15,
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
