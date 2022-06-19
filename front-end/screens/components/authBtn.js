import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { COLORS, FONTS } from "../index";

function AuthBtn({ handleSubmit, submitForm, disabled, text }) {
  return (
    <TouchableOpacity
      style={s.btn}
      onPress={handleSubmit(submitForm)}
      disabled={disabled}
    >
      {disabled ? <ActivityIndicator size="small" color="white" /> : null}
      <Text style={s.btnText}>{text}</Text>
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
    flexDirection: "row",
  },
  btnText: {
    fontFamily: FONTS.regular,
    fontSize: 22,
    color: "white",
    letterSpacing: 1,
    marginLeft: 15,
  },
});

export default AuthBtn;
