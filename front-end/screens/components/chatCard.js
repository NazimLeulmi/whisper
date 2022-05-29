import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { COLORS, FONTS } from "../index";

function ChatCard({ item }) {
  return (
    <View style={s.chatContainer}>
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
  );
}

const s = StyleSheet.create({
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
    position: "absolute",
    fontSize: 11,
    fontFamily: FONTS.light,
    color: "black",
    right: 15,
    top: 10,
  },
});

export default ChatCard;
