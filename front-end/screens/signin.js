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

function SignIn({ navigation }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  function submitForm(data) {
    console.log(data);
  }
  let [hidePassword, setHidePassword] = React.useState(true);
  return (
    <View style={s.container}>
      <KeyboardAvoidingView behavior="position">
        <Image style={s.logo} source={require("../assets/logo.png")} />
        <Text style={s.headline}>SIGN IN</Text>
        <Text style={s.subHeader}>
          Enter your email and password to start chatting
        </Text>
        <Text style={s.label}>EMAIL ADDRESS</Text>
        <View style={s.inputContainer}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: { value: true, message: "The email is required" },
              minLength: {
                value: 6,
                message: "The minimum length is 6 characters",
              },
              maxLength: {
                value: 40,
                message: "The maximum length is 40 characters",
              },
              pattern: {
                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: "The email is invalid",
              },
            }}
            render={({ field: { value, onChange, onBlur } }) => (
              <>
                <TextInput
                  style={s.input}
                  placeholder="Enter your email address"
                  placeholderTextColor="rgba(0,0,0,.25)"
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                <Icon style={s.inputIcon} name="account" size={30} />
              </>
            )}
          />
        </View>
        {errors.email && <Text style={s.error}>{errors.email.message}</Text>}
        <Text style={s.label}>PASSWORD</Text>
        <View style={s.inputContainer}>
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange, onBlur } }) => (
              <>
                <TextInput
                  style={s.input}
                  placeholder="Enter your password"
                  placeholderTextColor="rgba(0,0,0,.25)"
                  secureTextEntry={hidePassword}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                <Icon
                  style={s.inputIcon}
                  onPress={() => setHidePassword(!hidePassword)}
                  name={
                    value === "" || value === undefined
                      ? "lock"
                      : hidePassword
                      ? "eye-off"
                      : "eye"
                  }
                  size={30}
                />
              </>
            )}
          />
        </View>
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
