import React from "react";
import { Text, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Chats from "../chats";
import { COLORS, FONTS } from "../index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectContacts from "../selectContacts";

const Tab = createBottomTabNavigator();

const ChatStack = createNativeStackNavigator();

function ChatNavigation() {
  return (
    <ChatStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="ChatsList"
    >
      <ChatStack.Screen name="ChatsList" component={Chats} />
      <ChatStack.Screen name="SelectContacts" component={SelectContacts} />
    </ChatStack.Navigator>
  );
}

function Contacts() {
  return (
    <View>
      <Text>CONTACTS</Text>
    </View>
  );
}
function Notifications() {
  return (
    <View>
      <Text>NOTIFICATIONS</Text>
    </View>
  );
}
function Settings() {
  return (
    <View>
      <Text>SETTINGS</Text>
    </View>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Chat") {
            iconName = "message";
          } else if (route.name === "Contacts") {
            iconName = "contacts";
          } else if (route.name === "Notifications") {
            iconName = "bell";
          } else {
            iconName = "cog";
          }

          // You can return any component that you like here!
          return (
            <Icon
              name={iconName}
              size={size}
              color={focused ? COLORS.starblue : "rgba(0, 0, 0, 0.5)"}
            />
          );
        },
        tabBarLabelStyle: {
          fontFamily: FONTS.regular,
          fontSize: 12,
        },
        tabBarActiveTintColor: COLORS.starblue,
        tabBarInactiveTintColor: "gray",
        tabBarActiveBackgroundColor: "whitesmoke",
        tabBarStyle: { height: 60 },
        tabBarLabelStyle: { marginBottom: 5 },
        headerShown: false,
        unmountOnBlur: true,
      })}
    >
      <Tab.Screen name="Chat" component={ChatNavigation} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default Tabs;
