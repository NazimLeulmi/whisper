import React from "react";
import {
  Bold,
  Btn,
  BtnText,
  Input,
  InputContainer,
  InputIcon,
  Label,
  Link,
  SubHeader,
  Container,
  Headline,
  Logo,
} from "./signup";
import { KeyboardAvoidingView, TouchableOpacity } from "react-native";

function SignIn({ navigation }) {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [hidePassword, setHidePassword] = React.useState(true);
  return (
    <Container>
      <KeyboardAvoidingView behavior="position">
        <Logo source={require("../assets/logo.png")} />
        <Headline>SIGN IN</Headline>
        <SubHeader>Enter your email and password to start chatting</SubHeader>
        <Label>EMAIL ADDRESS</Label>
        <InputContainer>
          <Input
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Enter a valid email"
            placeholderTextColor="rgba(0,0,0,.25)"
          />
          <InputIcon name="account" size={30} />
        </InputContainer>
        <Label>PASSWORD</Label>
        <InputContainer>
          <Input
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Enter a strong password"
            placeholderTextColor="rgba(0,0,0,.25)"
            secureTextEntry={hidePassword}
          />
          <InputIcon
            onPress={() => setHidePassword(!hidePassword)}
            name={password === "" ? "lock" : hidePassword ? "eye-off" : "eye"}
            size={30}
          />
        </InputContainer>
        <Btn>
          <BtnText>SIGN IN</BtnText>
        </Btn>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Link>
            Don't have an account ? <Bold> SIGN UP</Bold>
          </Link>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Container>
  );
}

export default SignIn;
