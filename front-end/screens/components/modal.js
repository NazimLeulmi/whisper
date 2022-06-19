import React, { useState } from "react";
import { Modal, StyleSheet, Text, View, Dimensions } from "react-native";
import { COLORS, FONTS } from "..";
import { useForm } from "react-hook-form";
import Input from "./authInput";
import Error from "./authError";
const screenWidth = Dimensions.get("screen").width;
import Btn from "./authBtn";

const ModalView = ({ visible, toggleModal }) => {
  const {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  function submitForm(data) {
    console.log("Submit Form", data);
  }

  return (
    <Modal
      style={{ backgroundColor: "red" }}
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        toggleModal();
      }}
    >
      <View style={s.bg}>
        <View style={s.container}>
          <Text style={s.header}>ADD CONTACT</Text>
          <Text style={s.label}>EMAIL ADDRESS</Text>
          <Input control={control} name="email" error={errors.email} />
          {errors.email ? <Error text={errors.email.message} /> : null}
          <Btn
            handleSubmit={handleSubmit}
            submitForm={submitForm}
            text="INVITE USER"
            disabled={disabled}
          />
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
    height: 300,
    width: screenWidth - 25,
    backgroundColor: "rgba(255,255,255,.95)",
    borderRadius: 10,
    padding: 25,
  },
  header: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.starblue,
    marginBottom: 25,
  },
  label: {
    fontFamily: FONTS.regular,
    fontSize: 14,
  },
});

export default ModalView;
