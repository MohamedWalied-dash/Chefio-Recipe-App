import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Onboarding from "../Screens/Onboarding";
import SignIN from "../Screens/SignIN";
import SignUP from "../Screens/SignUP";
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Scan from "../Screens/Scan";
import VerificationCode from "../Screens/VerificationCode";
import PasswordRecovery from "../Screens/PasswordRecovery";
import PasswordVerificationCode from "../Screens/PasswordVerificationCode";
import NewPassword from "../Screens/NewPassword";
import Upload from "../Screens/Upload";
import Notification from "../Screens/Notification";
import MyProfile from "../Screens/MyProfile";
import DetailRecipe from "../Screens/DetailRecipe";
const Stacks = createStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator 
      screenOptions={{ headerShown: false }}
      >
        <Stacks.Screen name="Onboarding" component={Onboarding} />
        <Stacks.Screen name="SignIN" component={SignIN} />
        <Stacks.Screen name="SignUP" component={SignUP} />
        <Stacks.Screen name="VerificationCode" component={VerificationCode} />
        <Stacks.Screen name="PasswordRecovery" component={PasswordRecovery} />
        <Stacks.Screen name="PasswordVerificationCode" component={PasswordVerificationCode} />
        <Stacks.Screen name="NewPassword" component={NewPassword} />
        <Stacks.Screen name="Home" component={Home} />
        <Stacks.Screen name="Upload" component={Upload} />
        <Stacks.Screen name="Search" component={Search} />
        <Stacks.Screen name="Scan" component={Scan} />
        <Stacks.Screen name="Notification" component={Notification} />
        <Stacks.Screen name="DetailRecipe" component={DetailRecipe} />
        <Stacks.Screen name="MyProfile" component={MyProfile} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
