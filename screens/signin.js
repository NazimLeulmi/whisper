import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import { s } from "./signup";
function SignIn({ navigation }) {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [hidePassword, setHidePassword] = React.useState(true);
  return (
    <View style={s.container}>
      <KeyboardAvoidingView behavior="position">
        <Image style={s.logo} source={require("../assets/logo.png")} />
        <Text style={s.headline}>SIGN IN</Text>
        <Text style={s.subHeader}>
          Enter your email and password to start chatting
        </Text>
        <Text style={s.label}>EMAIL ADDRESS</Text>
        <View style={s.inputContainer}>
          <TextInput
            style={s.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Enter a valid email"
            placeholderTextColor="rgba(0,0,0,.25)"
          />
          <Icon style={s.inputIcon} name="account" size={30} />
        </View>
        <Text style={s.label}>PASSWORD</Text>
        <View style={s.inputContainer}>
          <TextInput
            style={s.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Enter a strong password"
            placeholderTextColor="rgba(0,0,0,.25)"
            secureTextEntry={hidePassword}
          />
          <Icon
            style={s.inputIcon}
            onPress={() => setHidePassword(!hidePassword)}
            name={password === "" ? "lock" : hidePassword ? "eye-off" : "eye"}
            size={30}
          />
        </View>
        <Pressable style={s.btn}>
          <Text style={s.btnText}>SIGN IN</Text>
        </Pressable>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={s.link}>
            Don't have an account ? <Text style={s.bold}> SIGN UP</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

export default SignIn;
