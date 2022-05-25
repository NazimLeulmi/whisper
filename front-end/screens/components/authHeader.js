import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS, FONTS } from "../index";

function AuthHeader({ route }) {
  return (
    <>
      <Text style={s.headline}>
        {route === "SignUp" ? "SIGN UP" : "SIGN IN"}
      </Text>
      <Text style={s.subHeader}>
        {route === "SignUp"
          ? "Enter a valid email and a strong password to create an account"
          : "Enter your email and password to start chatting"}
      </Text>
    </>
  );
}

let s = StyleSheet.create({
  headline: {
    fontFamily: FONTS.bold,
    fontSize: 55,
    width: "75%",
    color: COLORS.starblue,
  },
  subHeader: {
    fontFamily: FONTS.light,
    fontSize: 22,
    width: "75%",
    color: "black",
    marginBottom: 30,
  },
});

export default AuthHeader;
