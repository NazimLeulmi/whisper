import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import { AuthProvider } from "./screens/global/authContext";
import axios from "axios";
import StackNav from "./screens/components/stack";
import { SocketProvider } from "./screens/global/socketContext";

// Send credentials with HTTP requests
axios.defaults.withCredentials = true;

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
    <AuthProvider>
      <SocketProvider>
        <StackNav />
      </SocketProvider>
    </AuthProvider>
  );
}

export default App;
