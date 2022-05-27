import React from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import { COLORS, FONTS } from "./index";
import Btn from "./components/verifyBtn";

function Confirmation() {
  return (
    <View style={s.container}>
      <StatusBar />
      <Image style={s.img} source={require("../assets/email.png")} />
      <Text style={s.header}>EMAIL VERIFICATION</Text>
      <Text style={s.text}>
        We sent to you a verification email. Kindly click on the verification
        link to activate your account.
      </Text>
      <Btn />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    padding: 20,
  },
  img: {
    width: 200,
    height: 200,
    marginTop: 40,
    marginBottom: 60,
    alignSelf: "center",
  },
  header: {
    fontFamily: FONTS.bold,
    color: "black",
    fontSize: 26,
    marginBottom: 8,
  },
  text: {
    fontFamily: FONTS.regular,
    color: "black",
    fontSize: 18,
  },
  email: {
    color: "black",
    fontSize: 20,
    color: COLORS.starblue,
  },
});

export default Confirmation;
