import { View, Text, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../Conts/COLORS";
import { Dimensions } from "../Conts/Dimensions";
const Input = ({ title, password, iconName, required, ...props }) => {
  const [hidePassword, setHidePassword] = React.useState(password);

  return (
    <View>
      <Text
        style={{
          color: COLORS.SecondaryText,
          marginVertical: 5,
          fontSize: 17,
          marginLeft: 10,
        }}
      >
        {title} {required && <Text style={{ color: COLORS.secondary }}>*</Text>}
      </Text>
      <View
        style={{
          height: 55,
          backgroundColor: COLORS.white,
          width: "90%",
          marginHorizontal: "5%",
          borderRadius: 99,
          paddingHorizontal: 5,
          flexDirection: "row",
          borderWidth:1,
          borderColor:COLORS.outline
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Ionicons
            name={iconName}
            style={{
              color: COLORS.MainText,
              fontSize: Dimensions.H1,
              marginLeft: 5,
              paddingHorizontal: 5,
            }}
          />
        </View>
        <TextInput
          placeholderTextColor={COLORS.SecondaryText}
          autoCorrect={false}
          secureTextEntry={hidePassword}
          style={{
            color: COLORS.MainText,
            fontSize: Dimensions.P2,
            textAlign: "auto",
            flex: 1,
          }}
          {...props}
        />
        {password && (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Ionicons
              onPress={() => setHidePassword(!hidePassword)}
              name={hidePassword ? "eye-outline" : "eye-off-outline"}
              style={{
                color: COLORS.SecondaryText,
                fontSize: Dimensions.H1,
                marginRight: 10,
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Input;
