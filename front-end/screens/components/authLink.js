import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "../index";

function AuthLink({ navigate, route }) {
  return (
    <TouchableOpacity
      onPress={() => navigate(route === "SignUp" ? "SignIn" : "SignUp")}
    >
      <Text style={s.link}>
        {route === "SignUp" ? "Already" : "Don't"} have an account ?{" "}
        <Text style={s.bold}>{route === "SignUp" ? "SIGN IN" : "SIGN UP"}</Text>
      </Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  link: {
    textAlign: "center",
    fontFamily: FONTS.light,
    fontSize: 15,
    marginTop: 20,
    marginBottom: 20,
    color: "black",
  },
  bold: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.starblue,
  },
});

export default AuthLink;
