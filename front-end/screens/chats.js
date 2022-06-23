import React, { useContext } from "react";
import { View, StyleSheet, FlatList, StatusBar } from "react-native";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import Search from "./components/search";
import ChatCard from "./components/chatCard";
import ActionBtn from "./components/fab";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/header";
import { COLORS } from ".";
import { io } from "socket.io-client";
import { SocketContext } from "./global/socketContext";

function Chats({ navigation }) {
  let [chats, setChats] = React.useState(null);
  let { socket, setSocket } = useContext(SocketContext);

  useFocusEffect(
    React.useCallback(() => {
      if (!socket) {
        const socket = io("ws://192.168.1.103:8888", {
          reconnectionDelayMax: 10000,
        });
        setSocket(socket);
        console.log("Connected to socket-io");
      }
    }, [socket])
  );
  function selectContacts() {
    navigation.navigate("SelectContacts");
  }

  return (
    <SafeAreaView style={s.container}>
      <StatusBar backgroundColor={COLORS.starblue} barStyle="light-content" />
      <Header icon="account-group" text="GROUPS" />
      <Search />
      <FlatList
        style={s.chatsList}
        data={chats}
        renderItem={({ item }) => <ChatCard item={item} />}
        keyExtractor={(item) => item.id}
      />
      <ActionBtn handlePress={selectContacts} icon="chat-plus" />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    position: "relative",
  },

  chatsList: {
    padding: 15,
  },
});

export default Chats;
