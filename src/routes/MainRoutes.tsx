import React from "react";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SettingsRoutes from "./SettingsRoutes";

import { AccountScreen } from "../screens";
import { Colors } from "../utils/constants";
import { Icon } from "../components";
import HomeRoutes from "./HomeRoutes";

const Tab = createBottomTabNavigator()

export default function MainRoutes() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={options}
      >

        <Tab.Screen
          name='HomeStack'
          component={HomeRoutes}
          options={{ tabBarIcon: ({ color }) => <Icon type="Entypo" size={28} name="home" color={color} /> }}
        />

        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{ tabBarIcon: ({ color }) => <Icon type="MaterialIcons" size={32} name="person" color={color} /> }}
        />

        <Tab.Screen
          name="SettingsStack"
          component={SettingsRoutes}
          options={{ tabBarIcon: ({ color }) => <Icon type="Ionicons" size={28} name="settings-sharp" color={color} /> }}
        />

      </Tab.Navigator>
    </>
  )
}

const options: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: {
    borderTopWidth: 0,
    backgroundColor: Colors.Blue.Min,
    height: 60,
  },
  tabBarShowLabel: false,
  tabBarActiveTintColor: Colors.Blue.Deep,
  tabBarInactiveTintColor: Colors.White,
  tabBarHideOnKeyboard: true
}
