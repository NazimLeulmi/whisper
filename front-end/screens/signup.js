import React from "react";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import { COLORS, FONTS } from "./index";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useForm, Controller } from "react-hook-form";

function SignUp({ navigation }) {
  let [hidePassword, setHidePassword] = React.useState(true);

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const password = React.useRef({});
  password.current = watch("password", "");

  function submitForm(data) {
    console.log(data);
  }

  return (
    <View style={s.container}>
      <KeyboardAvoidingView behavior="position">
        <Image style={s.logo} source={require("../assets/logo.png")} />
        <Text style={s.headline}>SIGN UP</Text>
        <Text style={s.subHeader}>
          Enter a valid email and a strong password to create an account
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
                  placeholder="Enter a valid email"
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
            rules={{
              required: { value: true, message: "The password is required" },
              minLength: {
                value: 8,
                message: "The minimume length is 8 characters",
              },
            }}
            render={({ field: { value, onChange, onBlur } }) => (
              <>
                <TextInput
                  style={s.input}
                  placeholder="Enter a strong password"
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
        {errors.password && (
          <Text style={s.error}>{errors.password.message}</Text>
        )}
        <Text style={s.label}>PASSWORD CONFIRMATION</Text>
        <View style={s.inputContainer}>
          <Controller
            name="passwordc"
            control={control}
            rules={{
              required: {
                value: true,
                message: "The password confirmation is required",
              },
              validate: (value) =>
                value === password.current ||
                "The password confirmation doesn't match",
            }}
            render={({ field: { value, onBlur, onChange } }) => (
              <>
                <TextInput
                  style={s.input}
                  placeholder="Confirm your password"
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
        {errors.passwordc && (
          <Text style={s.error}>{errors.passwordc.message}</Text>
        )}
        <Pressable style={s.btn} onPress={handleSubmit(submitForm)}>
          <Text style={s.btnText}>SIGN UP</Text>
        </Pressable>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={s.link}>
            Already have an account ? <Text style={s.bold}> SIGN IN</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,.9)",
    padding: 20,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 30,
  },
  headline: {
    fontFamily: FONTS.regular,
    fontSize: 55,
    width: "75%",
    color: COLORS.starblue,
  },
  subHeader: {
    fontFamily: FONTS.regular,
    fontSize: 22,
    width: "75%",
    color: "black",
    marginBottom: 30,
  },
  label: {
    fontFamily: FONTS.regular,
    fontSize: 15,
    width: "75%",
    color: "black",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 60,
    backgroundColor: "whitesmoke",
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,.1)",
    borderRadius: 15,
    marginTop: 8,
    marginBottom: 10,
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 15,
    position: "relative",
  },
  inputIcon: {
    position: "absolute",
    right: 15,
    color: "rgba(0,0,0,.5)",
  },
  btn: {
    width: "100%",
    backgroundColor: COLORS.starblue,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  btnText: {
    fontFamily: FONTS.regular,
    fontSize: 22,
    color: "white",
    letterSpacing: 1,
  },
  link: {
    textAlign: "center",
    fontFamily: FONTS.light,
    fontSize: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  bold: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.starblue,
  },
  error: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: COLORS.feiryrose,
    marginBottom: 10,
  },
});

export default SignUp;
