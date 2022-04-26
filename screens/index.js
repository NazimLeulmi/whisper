import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Image, Text } from "react-native";
import { Dimensions, StyleSheet, Pressable } from "react-native";
import styled from "styled-components";

export const COLORS = {
  /* CSS HEX */
  yellow: "#FCCE00ff",
  bgreen: "#00AEBAff",
  midnight: "#07014Cff",
  starblue: "#1D73A4ff",
  feiryrose: "#FF4767ff",
};

export const FONTS = {
  regular: "OpenSans-Regular",
  medium: "OpenSans-Medium",
  bold: "OpenSans-Bold",
  light: "OpenSans-Light",
};

export let windowWidth = Dimensions.get("window").width;
export let windowHeight = Dimensions.get("window").height;

const TEXT =
  "keep your conversations secure. We can't read your messages" +
  " or listen to your calls, and no one else can either. Privacy isn’t optional " +
  "— it’s just the way that Whisper works. Every message and every time.";

function HomeScreen({ navigation }) {
  return (
    <View style={s.container}>
      <StatusBar style="light" translucent={false} />
      <Image style={s.faces} source={require("../assets/faces.jpg")} />
      <Text style={s.header}>SHARE WITHOUT INSECURITY</Text>
      <Text style={s.paragraph}>{TEXT}</Text>
      <Pressable
        style={s.btn}
        onPress={() => navigation.navigate("SignUp")}
        android_ripple
      >
        <Text style={s.btnText}>GET STARTED</Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    position: "relative",
    padding: 20,
  },
  faces: {
    width: windowWidth - 40,
    height: 300,
    alignSelf: "center",
    margin: 20,
    marginTop: 0,
    borderRadius: 10,
  },
  header: {
    fontFamily: FONTS.bold,
    fontSize: 48,
    color: "black",
    lineHeight: 48,
  },
  paragraph: {
    fontFamily: FONTS.regular,
    fontSize: 22,
    color: "black",
  },
  btn: {
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.1)",
    marginTop: 22,
    marginBottom: 22,
    backgroundColor: COLORS.starblue,
    borderRadius: 10,
  },
  btnText: {
    fontFamily: FONTS.regular,
    fontSize: 22,
    color: "whitesmoke",
  },
});

export default HomeScreen;
