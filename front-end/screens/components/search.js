import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

function Search() {
  return (
    <View style={s.searchContainer}>
      <TextInput
        style={s.search}
        placeholder="Search"
        placeholderTextColor="rgba(0,0,0,.2)"
      />
      <Icon style={s.searchIcon} name="magnify" size={30} />
    </View>
  );
}

const s = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    marginRight: 15,
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
});

export default Search;
