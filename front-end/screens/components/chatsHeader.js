import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { COLORS, FONTS } from "../index";

function ChatsHeader() {
  return (
    <View style={s.header}>
      <Text style={s.brand}>WHISPER</Text>
      <Image style={s.logo} source={require("../../assets/logo.png")} />
    </View>
  );
}

const s = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  brand: {
    fontSize: 28,
    fontFamily: FONTS.light,
    letterSpacing: 1,
    color: COLORS.starblue,
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: "auto",
  },
});

export default ChatsHeader;
