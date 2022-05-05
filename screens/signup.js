import React from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "./index";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import styled from "styled-components/native";

const Container = styled.ScrollView`
  flex: 1;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
`;

const Logo = styled.Image`
  width: 70px;
  height: 70px;
  margin-bottom: 30px;
`;

const Headline = styled.Text`
  font-family: ${FONTS.regular};
  font-size: 55px;
  width: "75%";
  color: ${COLORS.starblue};
`;

export const SubHeader = styled.Text`
  font-family: ${FONTS.regular};
  font-size: 22px;
  width: "75%";
  color: black;
  margin-bottom: 30;
`;

export const Label = styled.Text`
  font-family: ${FONTS.regular};
  font-size: 15px;
  width: "75%";
  color: black;
`;

export const InputContainer = styled.View`
  flex-direction: "row";
  align-items: "center";
`;
export const Input = styled.TextInput`
  width: "100%";
  height: 60px;
  background: whitesmoke;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-top: 8px;
  margin-bottom: 10px;
  font-size: 18px;
  padding: 0 15px;
  position: relative;
`;

export const InputIcon = styled(Icon)`
  position: absolute;
  right: 15;
  color: rgba(0, 0, 0, 0.5);
`;
export const Btn = styled.TouchableOpacity`
  width: "100%";
  background: ${COLORS.starblue};
  height: 60px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
export const BtnText = styled.Text`
  position: absolute;
  right: 15;
  color: rgba(0, 0, 0, 0.5);
`;

export const Link = styled.Text`
  text-align: center;
  font-family: ${FONTS.regular};
  font-size: 15px;
  margin: 0 15px;
`;

export const Bold = styled.Text`
  font-family: ${FONTS.bold};
  font-size: 16px;
`;

function SignUp({ navigation }) {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [passwordc, setPasswordc] = React.useState("");
  let [hidePassword, setHidePassword] = React.useState(true);
  return (
    <Container>
      <KeyboardAvoidingView behavior="position">
        <Logo source={require("../assets/logo.png")} />
        <Headline>SIGN UP</Headline>
        <SubHeader>
          Enter a valid email and a strong password to create an account
        </SubHeader>
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
        <Label>PASSWORD CONFIRMATION</Label>
        <InputContainer>
          <Input
            value={passwordc}
            onChangeText={(text) => setPasswordc(text)}
            placeholder="Confirm your password"
            placeholderTextColor="rgba(0,0,0,.25)"
            secureTextEntry={hidePassword}
          />
          <InputIcon
            onPress={() => setHidePassword(!hidePassword)}
            name={passwordc === "" ? "lock" : hidePassword ? "eye-off" : "eye"}
            size={30}
          />
        </InputContainer>
        <Btn onPress={() => console.log("Pressed")}>
          <BtnText>SIGN UP</BtnText>
        </Btn>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Link style={s.link}>
            Already have an account ? <Bold> SIGN IN</Bold>
          </Link>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Container>
  );
}

export default SignUp;
