import React from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { s } from "./signup";
import { useForm } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import Label from "./components/authLabel";
import Header from "./components/authHeader";
import Input from "./components/authInput";
import Error from "./components/authError";
import Btn from "./components/authBtn";
import Link from "./components/authLink";
import { useFocusEffect } from "@react-navigation/native";

function SignIn({ navigation }) {
  // React hook form state
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const route = useRoute();
  function submitForm(data) {
    console.log(data);
  }
  useFocusEffect(
    React.useCallback(() => {
      return function () {
        reset();
      };
    }, [])
  );
  return (
    <View style={s.container}>
      <KeyboardAvoidingView behavior="position">
        <Header route={route.name} />
        {/* EMAIL ADDRESS INPUT */}
        <Label text="EMAIL ADDRESS" />
        <Input control={control} name="email" error={errors.email} />
        {errors.email ? <Error text={errors.email.message} /> : null}
        {/* PASSWORD INPUT */}
        <Label text="PASSWORD" />
        <Input control={control} name="password" error={errors.password} />
        {errors.password ? <Error text={errors.password.message} /> : null}
        <Btn
          handleSubmit={handleSubmit}
          submitForm={submitForm}
          route={route.name}
        />
        <Link route={route.name} navigate={navigation.navigate} />
      </KeyboardAvoidingView>
    </View>
  );
}

export default SignIn;
