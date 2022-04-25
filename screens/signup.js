import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native";
import { COLORS, FONTS, windowHeight, windowWidth } from "./index";

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: whitesmoke;
  position: relative;
  padding: 20px;
`;

const Logo = styled.Image``;

function SignUp() {
  return (
    <Container>
      <StatusBar style="light" translucent={false} />
      <Logo source={require("../assets/logo.png")} />
    </Container>
  );
}

export default SignUp;
