import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONTS, windowHeight, windowWidth } from "./index";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

function SignUp({ navigation }) {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [passwordc, setPasswordc] = React.useState("");
  let [hidePassword, setHidePassword] = React.useState(true);
  return (
    <ScrollView style={s.container}>
      <KeyboardAvoidingView behavior="position">
        <Image style={s.logo} source={require("../assets/logo.png")} />
        <Text style={s.header}>SIGN UP</Text>
        <Text style={s.subHeader}>
          Enter a valid email and a strong password to create an account
        </Text>
        <Text style={s.label}>EMAIL ADDRESS</Text>
        <View style={s.inputContainer}>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={s.input}
            placeholder="Enter a valid email"
            placeholderTextColor="rgba(0,0,0,.25)"
          />
          <Icon name="account" size={30} style={s.inputIcon} />
        </View>
        <Text style={s.label}>PASSWORD</Text>
        <View style={s.inputContainer}>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={s.input}
            placeholder="Enter a strong password"
            placeholderTextColor="rgba(0,0,0,.25)"
            secureTextEntry={hidePassword}
          />
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={password === "" ? "lock" : hidePassword ? "eye-off" : "eye"}
            size={30}
            style={s.inputIcon}
          />
        </View>
        <Text style={s.label}>PASSWORD CONFIRMATION</Text>
        <View style={s.inputContainer}>
          <TextInput
            value={passwordc}
            onChangeText={(text) => setPasswordc(text)}
            style={s.input}
            placeholder="Confirm your password"
            placeholderTextColor="rgba(0,0,0,.25)"
            secureTextEntry={hidePassword}
          />
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={passwordc === "" ? "lock" : hidePassword ? "eye-off" : "eye"}
            size={30}
            style={s.inputIcon}
          />
        </View>
        <TouchableOpacity style={s.btn} onPress={() => console.log("Pressed")}>
          <Text style={s.btnText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={s.link}>
            Already have an account ? <Text style={s.bold}> SIGN IN</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 30,
  },
  header: {
    fontFamily: FONTS.regular,
    fontSize: 55,
    width: "75%",
    color: COLORS.starblue,
  },
  subHeader: {
    fontFamily: FONTS.regular,
    fontSize: 22,
    width: "75%",
    color: "black",
    marginBottom: 30,
  },
  label: {
    fontFamily: FONTS.regular,
    fontSize: 15,
    width: "75%",
    color: "black",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 60,
    backgroundColor: "whitesmoke",
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,.1)",
    marginTop: 8,
    marginBottom: 10,
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 15,
    position: "relative",
    borderRadius: 10,
  },

  inputIcon: {
    position: "absolute",
    right: 15,
    color: "rgba(0,0,0,.5)",
  },
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
    color: "whitesmoke",
    fontFamily: FONTS.regular,
    fontSize: 24,
  },
  link: {
    textAlign: "center",
    fontFamily: FONTS.regular,
    fontSize: 15,
    marginTop: 16,
    marginBottom: 16,
  },
  bold: {
    fontSize: 16,
    color: COLORS.starblue,
  },
});

export default SignUp;
