import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderTitle from "./Project/HeaderTitle";
import Logo from "./Project/Logo";
import Apply from "./Project/Apply";
import Login from "./Project/Login";

const HomeStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        {/* Home */}
        <HomeStack.Screen
          name="Home"
          component={Logo}
          options={{ headerTitle: () => <HeaderTitle title="" /> }} // กำหนดชื่อที่แสดงบน header
        />

        {/* Apply */}
        <HomeStack.Screen
          name="Apply"
          component={Apply}
          options={{ headerTitle: () => <HeaderTitle title="กลับ" /> }}
        />

        {/* Login */}
        <HomeStack.Screen
          name="Login"
          component={Login}
          options={{ headerTitle: () => <HeaderTitle title="กลับ" /> }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
