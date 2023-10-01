import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native";
import { COLORS } from "../Conts/COLORS";
import { TouchableOpacity } from "react-native";
import { Dimensions } from "../Conts/Dimensions";

const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, height: "100%" }}>
      <View style={{ padding: 2 }}>
        <Image
          source={require("../../assets/onbordingimage.png")}
          style={{ width: "100%", height: 400 }}
        />
      </View>
      <View style={{padding:10}}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{ color: COLORS.MainText, fontSize: Dimensions.H1, fontWeight: "bold" }}
          >
            Start Cooking
          </Text>
        </View>
        <View
          style={{ width: "55%", marginHorizontal: "22.5%", marginTop: 10 }}
        >
          <Text
            style={{
              color: COLORS.SecondaryText,
              fontSize: Dimensions.P1,
              fontWeight: "normal",
              textAlign: "center",
               lineHeight:30
            }}
          >
            Let’s join our community to cook better food!
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "80%",
          height: 56,
          backgroundColor: COLORS.primary,
          marginHorizontal: "10%",
          marginTop: 100,
          borderRadius: 999,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("SignIN")}
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 56,
            borderRadius: 999,
            overflow: "hidden",
          }}
        >
          <Text style={{ color: COLORS.white, fontSize: Dimensions.P2 }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
