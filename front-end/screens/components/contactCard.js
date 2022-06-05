import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FONTS, COLORS } from "../index";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

function ContactCard({ item, selectContact }) {
  return (
    <TouchableOpacity style={s.container} onPress={selectContact}>
      <Image style={s.avatar} source={{ uri: item.picture }} />
      <View style={s.textContainer}>
        <Text style={s.name}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={s.status} numberOfLines={1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </Text>
        {item.selected ? (
          <Icon name="check-circle" size={26} style={s.icon} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

let s = StyleSheet.create({
  container: {
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
  status: {
    fontFamily: FONTS.regular,
    width: "70%",
    fontSize: 13,
    color: "rgba(0,0,0,.7)",
  },
  icon: {
    position: "absolute",
    right: 15,
    color: COLORS.starblue,
  },
});

export default ContactCard;
