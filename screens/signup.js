import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { SafeAreaView, ImageBackground, TextInput } from "react-native";
import { COLORS, FONTS, windowHeight, windowWidth } from "./index";

const Background = styled(ImageBackground)`
  flex: 1;
  background-color: whitesmoke;
  position: relative;
  position: relative;
`;
const Container = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 20px;
`;

const Logo = styled.Image`
  width: 70px;
  height: 70px;
  margin-bottom: 30px;
`;

const Header = styled.Text`
  font-family: ${FONTS.regular};
  font-size: 55px;
  width: 75%;
  color: ${COLORS.starblue};
`;

const SubHeader = styled.Text`
  font-family: ${FONTS.regular};
  font-size: 22px;
  color: black;
  width: 75%;
  margin-bottom: 30px;
`;

const Label = styled.Text`
  font-family: ${FONTS.regular};
  font-size: 18px;
  color: black;
  width: 75%;
`;

const Input = styled(TextInput)`
  width: 100%;
  height: 55px;
  background-color: whitesmoke;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-top:8px;
`;

function SignUp() {
  return (
    <Background source={require("../assets/background.jpg")} resizeMode="cover">
      <StatusBar style="light" translucent={false} />
      <Container>
        <Logo source={require("../assets/logo.png")} />
        <Header>SIGN UP</Header>
        <SubHeader>
          Enter a valid email and a strong password to create an account
        </SubHeader>
        <Label>EMAIL ADDRESS</Label>
        <Input />
      </Container>
    </Background>
  );
}

export default SignUp;
