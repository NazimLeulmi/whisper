import React from "react";
import { StyleSheet, FlatList, SafeAreaView, StatusBar } from "react-native";
import { COLORS, FONTS } from "./index";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import ContactCard from "./components/contactCard";
import Search from "./components/search";
import ActionBtn from "./components/fab";
import Header from "./components/header";
import ModalView from "./components/modal";

function Contacts({ navigation }) {
  let [contacts, setContacts] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  useFocusEffect(React.useCallback(() => {}, []));

  function toggleModal() {
    setOpen((prevState) => !prevState);
  }

  return (
    <SafeAreaView style={s.container}>
      <StatusBar backgroundColor={COLORS.starblue} barStyle="light" />
      <Header icon="account-multiple" text="CONTACTS" />
      <Search />
      <FlatList
        style={s.list}
        data={contacts}
        renderItem={({ item }) => <ContactCard item={item} />}
        keyExtractor={(item) => item.id}
      />
      <ActionBtn icon="account-plus" handlePress={toggleModal} />
      <ModalView visible={open} toggleModal={toggleModal} />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  list: { padding: 15 },
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    position: "relative",
  },
});

export default Contacts;
