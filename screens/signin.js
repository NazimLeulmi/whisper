import React from "react";
import { StatusBar } from "expo-status-bar";
import {Bold,Btn,BtnText,Input,InputContainer,InputIcon,Label,Link,SubHeader} from "./signup";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { s } from "./signup";

function SignIn({ navigation }) {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [hidePassword, setHidePassword] = React.useState(true);
  return (
    <Container >
      <KeyboardAvoidingView behavior="position">
        <Logo style={s.logo} source={require("../assets/logo.png")} />
        <Headline style={s.header}>SIGN IN</Headline>
        <Text style={s.subHeader}>
          Enter your email and password to start chatting
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
        <TouchableOpacity style={s.btn}>
          <Text style={s.btnText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={s.link}>
            Don't have an account ? <Text style={s.bold}> SIGN UP</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Contai>
  );
}

export default SignIn;
