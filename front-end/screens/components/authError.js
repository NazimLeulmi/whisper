import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS, FONTS } from "../index";

function AuthError({ text }) {
  return <Text style={s.error}>{text}</Text>;
}

const s = StyleSheet.create({
  error: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: COLORS.feiryrose,
    marginBottom: 10,
  },
});

export default AuthError;
