import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Controller } from "react-hook-form";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { COLORS } from "../index";

function AuthInput({ control, name, error, password }) {
  const placeholders = {
    email: "Enter a valid email",
    username: "Enter your username",
    password: "Enter your password",
    passwordc: "Confirm your password",
  };
  const icons = {
    email: "email",
    username: "account",
    password: "lock",
    passwordc: "lock",
  };
  const rules = {
    email: {
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
    },
    username: {
      required: { value: true, message: "The username is required" },
      minLength: {
        value: 3,
        message: "The minimum length is 3 characters",
      },
      maxLength: {
        value: 10,
        message: "The maximum length is 10 characters",
      },
      pattern: {
        value: /^[a-z0-9]+$/i,
        message: "The username is must be alphanumeric",
      },
    },
    password: {
      required: { value: true, message: "The password is required" },
      minLength: {
        value: 8,
        message: "The minimume length is 8 characters",
      },
    },
    passwordc: {
      required: {
        value: true,
        message: "The password confirmation is required",
      },
      validate: (value) =>
        value === password || "The password confirmation doesn't match",
    },
  };
  return (
    <View style={s.inputContainer}>
      <Controller
        control={control}
        name={name}
        rules={rules[name]}
        render={({ field: { value, onChange, onBlur } }) => (
          <>
            <TextInput
              style={error ? s.inputError : s.input}
              placeholder={placeholders[name]}
              placeholderTextColor="rgba(0,0,0,.25)"
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={name === "password" || name === "passwordc"}
            />
            <Icon style={s.inputIcon} name={icons[name]} size={25} />
          </>
        )}
      />
    </View>
  );
}

let s = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 60,
    backgroundColor: "#FAF9F6",
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
  inputError: {
    width: "100%",
    height: 60,
    backgroundColor: "#FAF9F6",
    borderWidth: 1,
    borderColor: COLORS.feiryrose,
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
    color: "rgba(0,0,0,.2)",
  },
});

export default AuthInput;
