import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../Conts/COLORS";
import { Dimensions } from "../Conts/Dimensions";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { AntDesign } from "@expo/vector-icons";

const SignIN = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let disabled=!email||!password
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
          Welcome Back!
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
      <Input placeholder={"Email or phone number"} iconName={"ios-mail"} value={email} onChangeText={(text)=>setEmail(text)} />
      <Input
        placeholder={"Password"}
        iconName={"ios-lock-closed"}
        password={true}
        value={password}
        onChangeText={(text)=> setPassword(text)}
      />
      <View style={{ alignItems: "flex-end", padding: 20 }}>
        <Text style={{ fontSize: Dimensions.P2, color: COLORS.MainText }}>
          Forget password?
        </Text>
      </View>
      <Button name={"Login"} color={disabled?COLORS.SecondaryText:COLORS.primary} margin={50} disabled={disabled} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
        }}
      >
        <Text style={{ fontSize: Dimensions.P2, color: COLORS.SecondaryText }}>
          Or continue with
        </Text>
      </View>
      <Button
        name={
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="google" size={20} color={COLORS.white} />
            <Text
              style={{
                color: COLORS.white,
                fontSize: Dimensions.P2,
                marginLeft: 5,
              }}
            >
              Google
            </Text>
          </View>
        }
        color={COLORS.secondary}
        margin={25}
      />
      <View style={{justifyContent: 'center', alignItems: 'center',marginTop:20}}>
        <Text style={{color:COLORS.MainText}}>
        Don’t have any account? <Text onPress={()=> navigation.navigate("SignUP")} style={{color:COLORS.primary}}>Sign Up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIN;
