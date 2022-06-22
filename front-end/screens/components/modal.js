import React, { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONTS } from "..";
import { useForm } from "react-hook-form";
import Input from "./authInput";
import Error from "./authError";
const screenWidth = Dimensions.get("screen").width;

const ModalView = ({ visible, toggleModal }) => {
  const {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  function submitForm(data) {
    console.log("Submit Form", data);
  }

  function triggerModal() {
    toggleModal();
    reset();
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        triggerModal();
      }}
    >
      <View style={s.bg}>
        <View style={s.container}>
          <Text style={s.header}>ADD CONTACT</Text>
          <Input control={control} name="email" error={errors.email} />
          {errors.email ? <Error text={errors.email.message} /> : null}
          <View style={s.btnGroup}>
            <TouchableOpacity style={s.btn} onPress={handleSubmit(submitForm)}>
              <Text style={s.inviteTxt}>INVITE USER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.btn} onPress={triggerModal}>
              <Text style={s.cancelTxt}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const s = StyleSheet.create({
  bg: {
    backgroundColor: "rgba(0,0,0,.5)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: 250,
    width: screenWidth - 50,
    backgroundColor: "rgba(255,255,255,.95)",
    borderRadius: 10,
    padding: 25,
  },
  header: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.starblue,
    marginBottom: 25,
    alignSelf: "center",
  },
  btnGroup: {
    width: screenWidth - 50,
    height: 60,
    backgroundColor: "rgba(255,255,255,.65)",
    flexDirection: "row",
    bottom: 0,
    position: "absolute",
    borderRadius: 10,
  },
  btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,.2)",
  },
  inviteTxt: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.starblue,
  },
  cancelTxt: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.feiryrose,
  },
});

export default ModalView;
