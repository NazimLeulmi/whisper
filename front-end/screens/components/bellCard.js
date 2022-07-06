import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONTS } from "../index";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Swipeable from "react-native-gesture-handler/Swipeable";

function RightAction() {
  return (
    <View style={s.btnGroup}>
      <TouchableOpacity style={s.btn}>
        <Text style={s.btnText}>ACCEPT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.btnRed}>
        <Text style={s.btnText}>DECLINE</Text>
      </TouchableOpacity>
    </View>
  );
}

function BellCard({ item }) {
  return (
    <Swipeable renderRightActions={RightAction} rightThreshold={-200}>
      <View style={s.container}>
        <View style={s.avatar}>
          <Icon
            name={item.type === "user" ? "account" : "account-group"}
            size={25}
            color="rgba(0,0,0,.5)"
          />
        </View>
        <View style={s.textContainer}>
          <Text style={s.name}>{item.user_name}</Text>
          <Text style={s.msg} numberOfLines={1}>
            {item.type === "user"
              ? `${item.user_name} sent you a contact request`
              : `${item.user_name} invites you to join ${item.group_name}`}
          </Text>
        </View>
      </View>
    </Swipeable>
  );
}

let s = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    borderColor: "rgba(0,0,0,.1)",
    borderWidth: 0.2,
    flexDirection: "row",
    position: "relative",
    backgroundColor: "white",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: "center",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.1)",
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
  msg: {
    fontFamily: FONTS.regular,
    width: "90%",
    fontSize: 13,
    color: "rgba(0,0,0,.7)",
  },
  btnGroup: {
    flexDirection: "row",
  },
  btn: {
    height: 80,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.starblue,
  },
  btnRed: {
    height: 80,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.feiryrose,
  },
  btnText: {
    color: "white",
    fontFamily: FONTS.bold,
  },
});

export default BellCard;
