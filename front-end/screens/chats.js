import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";

import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import ChatsHeader from "./components/chatsHeader";
import Search from "./components/search";
import ChatCard from "./components/chatCard";
import ActionBtn from "./components/fab";
import SlidingPanel from "./components/slidingPanel";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

function Chats() {
  let [chats, setChats] = React.useState(null);
  let [isOpen, triggerPanel] = React.useState(false);
  let panelHeight = useSharedValue(0);

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

  function openPanel() {
    console.log("Animating");
    panelHeight.value = 500;
  }
  return (
    <View style={s.container}>
      <StatusBar />
      <ChatsHeader />
      <Search />
      <FlatList
        style={s.chatsList}
        data={chats}
        renderItem={({ item }) => <ChatCard item={item} />}
        keyExtractor={(item) => item.id}
      />
      <ActionBtn openPanel={openPanel} />
      <SlidingPanel height={panelHeight.value} />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },

  chatsList: {
    padding: 15,
  },
});

export default Chats;
