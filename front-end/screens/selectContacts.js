import React from "react";
import { StyleSheet, FlatList, SafeAreaView, StatusBar } from "react-native";
import { COLORS, FONTS } from "./index";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import SelectHeader from "./components/selectHeader";
import ContactCard from "./components/contactCard";
import Search from "./components/search";

function SelectContacts({ navigation }) {
  let [contacts, setContacts] = React.useState([]);
  let [counter, setCounter] = React.useState(0);

  function back() {
    console.log("Going back");
    navigation.goBack();
  }

  function selectContact(contact) {
    let newArray = [...contacts];
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === contact.id) {
        if (newArray[i].selected === false) {
          newArray[i].selected = true;
          setCounter((prev) => prev + 1);
          setContacts(newArray);
        } else {
          newArray[i].selected = false;
          setCounter((prev) => prev - 1);
          setContacts(newArray);
        }
      }
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      async function fetchContacts() {
        try {
          let response = await axios.get(
            "https://dummyapi.io/data/v1/user?limit=10",
            {
              headers: {
                "app-id": "627b889d977f951db58d57db",
              },
            }
          );
          let contacts = response.data.data;
          contacts.forEach((contact) => (contact.selected = false));
          setContacts(contacts);
          console.log(contacts);
        } catch (error) {
          console.log(error);
        }
      }
      fetchContacts();
    }, [])
  );
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.starblue} barStyle="light" />
      <SelectHeader counter={counter} navigate={back} />
      <Search />
      <FlatList
        style={s.list}
        data={contacts}
        renderItem={({ item }) => (
          <ContactCard item={item} selectContact={() => selectContact(item)} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  list: { padding: 15 },
});

export default SelectContacts;
