import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FONTS } from "../index";

function VerifyBtn({}) {
  return (
    <TouchableOpacity style={s.btn}>
      <Text style={s.btnText}>RESEND EMAIL</Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  btn: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,.1)",
  },
  btnText: {
    fontFamily: FONTS.regular,
    fontSize: 18,
    color: "black",
    letterSpacing: 1,
  },
});

export default VerifyBtn;
