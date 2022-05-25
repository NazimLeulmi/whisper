import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import { s } from "./signup";
import { useForm, Controller } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import Label from "./components/authLabel";
import Header from "./components/authHeader";
import Input from "./components/authInput";
import Error from "./components/authError";

function SignIn({ navigation }) {
  // React hook form state
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const route = useRoute();
  function submitForm(data) {
    console.log(data);
  }
  let [hidePassword, setHidePassword] = React.useState(true);
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
        <Pressable style={s.btn} onPress={handleSubmit(submitForm)}>
          <Text style={s.btnText}>SIGN IN</Text>
        </Pressable>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={s.link}>
            Don't have an account ? <Text style={s.bold}> SIGN UP</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

export default SignIn;
