import React from "react";
import { View, StyleSheet, FlatList, StatusBar } from "react-native";

import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import ChatsHeader from "./components/chatsHeader";
import Search from "./components/search";
import ChatCard from "./components/chatCard";
import ActionBtn from "./components/fab";
import { SafeAreaView } from "react-native-safe-area-context";

function Chats({ navigation }) {
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
        } catch (error) {
          console.error(error);
        }
      }
      fetchChats();
    }, [])
  );

  function selectContacts() {
    navigation.navigate("SelectContacts");
  }
  return (
    <SafeAreaView style={s.container}>
      <StatusBar />
      <ChatsHeader />
      <Search />
      <FlatList
        style={s.chatsList}
        data={chats}
        renderItem={({ item }) => <ChatCard item={item} />}
        keyExtractor={(item) => item.id}
      />
      <ActionBtn selectContacts={selectContacts} />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    position: "relative",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  chatsList: {
    padding: 15,
  },
});

export default Chats;
