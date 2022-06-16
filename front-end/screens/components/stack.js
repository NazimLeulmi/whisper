import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../index";
import SignUp from "../signup";
import SignIn from "../signin";
import Tabs from "./bottomNav";
import axios from "axios";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../global/authContext";
const Stack = createNativeStackNavigator();

function StackNav() {
  const { user, setUser } = useContext(AuthContext);
  useEffect(async () => {
    console.log("Component Mounted");
    try {
      if (user === null) {
        const response = await axios.get(
          "http://192.168.1.103:8888/check-auth"
        );
        const { data } = response;
        if (data.success === true) {
          setUser(data.user);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        {user === null ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
          </>
        ) : (
          <Stack.Screen name="Main" component={Tabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
