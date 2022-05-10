import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen, { COLORS, FONTS } from "./screens/index";
import SignUp from "./screens/signup";
import SignIn from "./screens/signin";
import { Text, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Chats from "./screens/chats";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
          if (route.name === "Chats") {
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
      })}
    >
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

function App() {
  let [fontsLoaded] = useFonts({
    "OpenSans-Light": require("./assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Medium": require("./assets/fonts/OpenSans-Medium.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Main"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Main" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
