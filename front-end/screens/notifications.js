import React from "react";
import { StyleSheet, FlatList, SafeAreaView, StatusBar } from "react-native";
import { COLORS } from "./index";
import { useFocusEffect } from "@react-navigation/native";
import Header from "./components/header";
import BellCard from "./components/bellCard";
import {
  GestureHandlerRootView,
  RotationGestureHandler,
} from "react-native-gesture-handler";

function Notifications({ navigation }) {
  // let [notifications, setNotifications] = React.useState([]);

  const notifications = [
    {
      id: "62bc31fdc1be5d",
      user_name: "dexter",
      user_id: "62bc31fdc1be5d59b301537c",
      type: "user",
      group_name: null,
      approved: false,
    },
    {
      id: "62bc31fdc11234",
      user_name: "marley",
      user_id: "62bc31fdc1be5d59b301534d",
      type: "user",
      group_name: null,
      approved: false,
    },
    {
      id: "62bc31fdc1dsad",
      user_name: "ducaty",
      user_id: "62bc31fdc1be5d59b301539f",
      type: "group",
      group_name: "outlaws",
      approved: false,
    },
    {
      id: "62bc31fdc1ddsa",
      user_name: "jacksparrow",
      user_id: "62bc31fdc1be5d59b301533b",
      type: "group",
      group_name: "SMD",
      approved: false,
    },
  ];

  useFocusEffect(React.useCallback(() => {}, []));

  return (
    <SafeAreaView style={s.container}>
      <StatusBar backgroundColor={COLORS.starblue} barStyle="light" />
      <Header icon="bell" text="NOTIFICATIONS" />
      <GestureHandlerRootView>
        <FlatList
          style={s.list}
          data={notifications}
          renderItem={({ item }) => <BellCard item={item} />}
          keyExtractor={(item) => item.id}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  list: {
    padding: 0,
    margin: 0,
  },
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    position: "relative",
    padding: 0,
    margin: 0,
  },
});

export default Notifications;
