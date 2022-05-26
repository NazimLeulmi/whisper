import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "../index";

function AuthBtn({ handleSubmit, submitForm, route }) {
  return (
    <TouchableOpacity style={s.btn} onPress={handleSubmit(submitForm)}>
      <Text style={s.btnText}>
        {route === "SignUp" ? "SIGN UP" : "SIGN IN"}
      </Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  btn: {
    width: "100%",
    backgroundColor: COLORS.starblue,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  btnText: {
    fontFamily: FONTS.regular,
    fontSize: 22,
    color: "white",
    letterSpacing: 1,
  },
});

export default AuthBtn;
