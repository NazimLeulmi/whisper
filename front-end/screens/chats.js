import React from "react";
import { FONTS, COLORS } from "./index";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  View,
  Text,
  TextInput,
  Image,
  StatusBar,
  StyleSheet,
  FlatList,
} from "react-native";

import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

function Chats() {
  let [chats, setChats] = React.useState(null);
  useFocusEffect(
    React.useCallback(() => {
      async function fetchChats() {
        try {
          let response = await axios.get(
            "https://dummyapi.io/data/v1/user?limit=10",
            {
              headers: {
                "app-id": "627b889d977f951db58d57db",
              },
            }
          );
          let chats = response.data.data;
          setChats(chats);
          console.log(chats);
        } catch (error) {
          console.log(error);
        }
      }
      fetchChats();
    }, [])
  );

  return (
    <View style={s.container}>
      <StatusBar />
      <View style={s.header}>
        <Text style={s.brand}>WHISPER</Text>
        <Image style={s.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={s.searchContainer}>
        <TextInput
          style={s.search}
          placeholder="Search"
          placeholderTextColor="rgba(0,0,0,.2)"
        />
        <Icon style={s.searchIcon} name="magnify" size={30} />
      </View>
      <FlatList
        style={s.chatsList}
        data={chats}
        renderItem={({ item }) => (
          <View style={s.chatContainer}>
            <Text style={s.msgs}>
              {Math.floor(
                Math.random() * (Math.floor(10) - Math.ceil(2)) + Math.ceil(2)
              )}
            </Text>
            <Text style={s.time}>4:25 pm</Text>
            <Image style={s.avatar} source={{ uri: item.picture }} />
            <View style={s.textContainer}>
              <Text style={s.name}>
                {item.firstName} {item.lastName}
              </Text>
              <Text style={s.chat} numberOfLines={1}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  header: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  brand: {
    fontSize: 28,
    fontFamily: FONTS.light,
    letterSpacing: 1,
    color: COLORS.starblue,
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: "auto",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  search: {
    width: "100%",
    height: 55,
    fontSize: 16,
    paddingLeft: 50,
    backgroundColor: "rgba(255,255,255,.3)",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,.1)",
  },
  searchIcon: {
    position: "absolute",
    left: 10,
    color: "rgba(0,0,0,.3)",
  },
  chatsList: {
    padding: 15,
  },
  chatContainer: {
    height: 80,
    width: "100%",
    backgroundColor: "rgba(255,255,255,.3)",
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,.1)",
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    position: "relative",
  },
  avatar: {
    borderRadius: 30,
    width: 60,
    height: 60,
    alignSelf: "center",
    margin: 10,
  },
  textContainer: {
    flex: 1,
    padding: 4,
    justifyContent: "center",
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    display: "flex",
    flexDirection: "row",
  },
  chat: {
    fontFamily: FONTS.regular,
    width: "70%",
    fontSize: 13,
    color: "rgba(0,0,0,.7)",
  },
  msgs: {
    right: 10,
    top: 5,
    position: "absolute",
    backgroundColor: COLORS.starblue,
    color: "whitesmoke",
    fontSize: 12,
    height: 20,
    width: 20,
    borderRadius: 5,
    textAlign: "center",
    fontFamily: FONTS.regular,
  },
  time: {
    right: 10,
    bottom: 5,
    position: "absolute",
    fontSize: 10,
    fontFamily: FONTS.light,
  },
});

export default Chats;
