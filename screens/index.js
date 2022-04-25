import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native";
import { Dimensions } from "react-native";

export const COLORS = {
  /* CSS HEX */
  yellow: "#FCCE00ff",
  bgreen: "#00AEBAff",
  midnight: "#07014Cff",
  starblue: " #1D73A4ff",
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

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: whitesmoke;
  position: relative;
  padding: 20px;
`;
const Faces = styled.Image`
  width: ${windowWidth - 40}px;
  height: 300px;
  align-self: center;
  margin: 20px;
  margin-top: 0;
  border-radius: 10px;
`;

const Header = styled.Text`
  font-family: ${FONTS.bold};
  font-size: 48px;
  color: black;
  line-height: 48px;
`;
const Paragraph = styled.Text`
  font-family: ${FONTS.regular};
  font-size: 22px;
  color: black;
`;

const Btn = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  background-color: rgba(255, 255, 255, 0.65);
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 22px;
  margin-bottom: 22px;
  background-color: ${COLORS.starblue};
`;
const BtnText = styled.Text`
  font-family: ${FONTS.regular};
  font-size: 22px;
  color: whitesmoke;
`;

function HomeScreen({ navigation }) {
  return (
    <Container>
      <StatusBar style="light" translucent={false} />
      <Faces source={require("../assets/faces.jpg")} />
      <Header>SHARE WITHOUT INSECURITY</Header>
      <Paragraph>{TEXT}</Paragraph>
      <Btn onPress={() => navigation.navigate("SignUp")}>
        <BtnText>GET STARTED</BtnText>
      </Btn>
    </Container>
  );
}

export default HomeScreen;
