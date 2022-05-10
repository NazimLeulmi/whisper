import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { FONTS, COLORS } from "./index";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Container = styled.View`
  flex: 1;
  background-color: whitesmoke;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

const Brand = styled.Text`
  font-size: 28px;
  font-family: ${FONTS.regular};
`;

const Logo = styled.Image`
  width: 40px;
  height: 40px;
`;

const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;

const Search = styled.TextInput`
  width: 100%;
  height: 55px;
  font-size: 16px;
  padding-left: 50px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
const SearchIcon = styled(Icon)`
  position: absolute;
  left: 10px;
  color: rgba(0, 0, 0, 0.3);
`;

const ChatContainer = styled.View`
  height: 100px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  border: 0.5px solid rgba(0, 0, 0, 0.1);
`;

function Chats() {
  return (
    <Container>
      <StatusBar />
      <Header>
        <Brand>WHISPER</Brand>
        <Logo source={require("../assets/logo.png")} />
      </Header>
      <SearchContainer>
        <Search placeholder="Search" placeholderTextColor="rgba(0,0,0,.2)" />
        <SearchIcon name="comment-search" size={30} />
      </SearchContainer>
      <ChatContainer></ChatContainer>
    </Container>
  );
}

export default Chats;
