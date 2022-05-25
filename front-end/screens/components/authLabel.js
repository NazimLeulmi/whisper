import React from "react";
import { StyleSheet, Text } from "react-native";
import { FONTS } from "../index";

function AuthLabel({ text }) {
  return <Text style={s.label}>{text}</Text>;
}

let s = StyleSheet.create({
  label: {
    fontFamily: FONTS.regular,
    fontSize: 15,
    width: "75%",
    color: "black",
  },
});

export default AuthLabel;
