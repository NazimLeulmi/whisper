import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { COLORS } from "../index";

function ActionBtn({}) {
  return (
    <TouchableOpacity style={s.fab} onPress={openPanel}>
      <Icon name="chat-plus" size={30} color="white" />
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  fab: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.starblue,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 15,
    right: 15,
    zIndex: 0,
  },
});

export default ActionBtn;
