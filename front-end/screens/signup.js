import React from "react";
import { KeyboardAvoidingView, StyleSheet, ScrollView } from "react-native";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import Label from "./components/authLabel";
import Header from "./components/authHeader";
import Input from "./components/authInput";
import Error from "./components/authError";
import Btn from "./components/authBtn";
import Link from "./components/authLink";
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

function SignUp({ navigation }) {
  const route = useRoute();
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
    setError,
    reset,
  } = useForm({ mode: "onBlur" });

  const password = React.useRef({});
  password.current = watch("password", "");
  const [disabled, setDisabled] = React.useState(false);

  async function submitForm(formData) {
    try {
      setDisabled(true);
      let response = await axios.post(
        "http://192.168.1.103:8888/signup",
        formData
      );
      let data = await response.data;
      if (data.isValid === true) navigation.navigate("SignIn");
      for (const errorName in data.errors) {
        console.log(`${errorName}: ${data.errors[errorName]}`);
        if (data.errors[errorName]) {
          setError(errorName, {
            type: "server",
            message: data.errors[errorName],
          });
        }
      }
      setDisabled(false);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      return function () {
        reset();
      };
    }, [])
  );

  return (
    <KeyboardAvoidingView style={s.container}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
      >
        <Header route={route.name} />
        {/* EMAIL ADDRESS INPUT */}
        <Label text="EMAIL ADDRESS" />
        <Input control={control} name="email" error={errors.email} />
        {errors.email ? <Error text={errors.email.message} /> : null}
        {/* USERNAME INPUT */}
        <Label text="USERNAME" />
        <Input control={control} name="username" error={errors.username} />
        {errors.username ? <Error text={errors.username.message} /> : null}
        {/* PASSWORD INPUT */}
        <Label text="PASSWORD" />
        <Input control={control} name="password" error={errors.password} />
        {errors.password ? <Error text={errors.password.message} /> : null}
        {/* PASSWORD CONFIRMATION */}
        <Label text="PASSWORD CONFIRMATION" />
        <Input
          control={control}
          name="passwordc"
          error={errors.passwordc}
          password={password.current}
        />
        {errors.passwordc ? <Error text={errors.passwordc.message} /> : null}
        <Btn
          handleSubmit={handleSubmit}
          submitForm={submitForm}
          route={route.name}
          disabled={disabled}
        />
        <Link route={route.name} navigate={navigation.navigate} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,.9)",
    padding: 20,
    paddingTop: 40,
  },
});

export default SignUp;
