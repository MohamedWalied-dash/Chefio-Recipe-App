import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../Conts/COLORS";
import { Dimensions } from "react-native";

const Button = ({ name, color, onPress, margin, disabled, loading, ...props }) => {
  return (
    <View
      style={{
        width: "80%",
        height: 56,
        backgroundColor: color,
        marginHorizontal: "10%",
        borderRadius: 999,
        marginTop: margin,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        disabled={disabled || loading}
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: 56,
          borderRadius: 999,
          overflow: "hidden",
        }}
        {...props}
      >
        {loading ? (
          <ActivityIndicator size="small" color={COLORS.white} />
        ) : (
          <Text style={{ color: COLORS.white, fontSize: Dimensions.P2 }}>
            {name}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
