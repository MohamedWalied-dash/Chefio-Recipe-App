import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../Conts/COLORS";
import { Dimensions } from "../Conts/Dimensions";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { AntDesign } from "@expo/vector-icons";

const SignUP = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstCheck, setFirstCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);
  let disabled = !firstCheck || !secondCheck ||!email;

  const checkPasswordIsLongEnough = (password) => {
    const isLongEnough = password.length >= 6;
    return isLongEnough;
  };
  const checkPasswordContainsNumber = (password) => {
    const containsNumber = /\d/.test(password);
    return containsNumber;
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
    setFirstCheck(checkPasswordIsLongEnough(newPassword));
    setSecondCheck(checkPasswordContainsNumber(newPassword));
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, height: "100%" }}>
      <View
        style={{
          padding: 25,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Text style={{ fontSize: Dimensions.H1, color: COLORS.MainText }}>
          Welcome!
        </Text>
        <Text
          style={{
            fontSize: Dimensions.P2,
            color: COLORS.SecondaryText,
            marginVertical: 10,
          }}
        >
          Please enter your account here
        </Text>
      </View>
      <Input
        placeholder={"Email or phone number"}
        iconName={"ios-mail"}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder={"Password"}
        iconName={"ios-lock-closed"}
        password={true}
        onChangeText={handlePasswordChange}
      />
      <View style={{ padding: 25 }}>
        <Text style={{ color: COLORS.MainText, fontSize: Dimensions.P1 }}>
          Your Password must contain:
        </Text>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <AntDesign
            name="checkcircleo"
            size={20}
            color={firstCheck ? COLORS.primary : COLORS.SecondaryText}
          />
          <Text
            style={{
              fontSize: Dimensions.P2,
              color: firstCheck ? COLORS.MainText : COLORS.SecondaryText,
              marginHorizontal: 5,
            }}
          >
            At least 6 characters
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <AntDesign
            name="checkcircleo"
            size={20}
            color={secondCheck ? COLORS.primary : COLORS.SecondaryText}
          />
          <Text
            style={{
              fontSize: Dimensions.P2,
              color: secondCheck ? COLORS.MainText : COLORS.SecondaryText,
              marginHorizontal: 5,
            }}
          >
            Contains a number
          </Text>
        </View>
      </View>
      <Button
        name={"Sign Up"}
        color={disabled?COLORS.SecondaryText:COLORS.primary}
        margin={50}
        disabled={disabled}
        loading={false}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: COLORS.MainText }}>
          Already have an account?{" "}
          <Text
            onPress={() => navigation.navigate("SignIN")}
            style={{ color: COLORS.primary }}
          >
            Login
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUP;
