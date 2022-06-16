import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
} from "react-native";
import { AuthContext } from "./global/authContext";

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
      <StatusBar style="dark" />
      <Image style={s.faces} source={require("../assets/faces.jpg")} />
      <Text style={s.headline}>SHARE WITHOUT INSECURITY</Text>
      <Text style={s.intro}>{TEXT}</Text>
      <Pressable style={s.btn} onPress={() => navigation.navigate("SignIn")}>
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
    borderRadius: 10,
  },
  headline: {
    fontFamily: FONTS.bold,
    fontSize: 48,
    color: "black",
    lineHeight: 48,
  },
  intro: {
    fontFamily: FONTS.regular,
    fontSize: 22,
    color: "black",
  },
  btn: {
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(0,0,0,.1)",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 22,
    marginBottom: 22,
    backgroundColor: COLORS.starblue,
  },
  btnText: {
    fontFamily: FONTS.regular,
    fontSize: 22,
    color: "whitesmoke",
  },
});

export default HomeScreen;
