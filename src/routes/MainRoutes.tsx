import React from "react";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import StackRoutes from "./StackRoutes";
import { AccountScreen, SettingsScreen } from "../screens";
import { Colors } from "../utils/constants/colors";
import { Icon } from "../components";

const Tab = createBottomTabNavigator()

export default function MainRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={options}
    >

      <Tab.Screen
        name='HomeStack'
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color }) => <Icon type="Entypo" name="home" color={color} />,
          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: Colors.Blue.Min,
            height: 60,
            borderTopEndRadius: 25,
          },
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ tabBarIcon: ({ color }) => <Icon type="Entypo" name="user" color={color} /> }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarIcon: ({ color }) => <Icon type="MaterialCommunityIcons" name="wrench" color={color} /> }}
      />

    </Tab.Navigator>
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
}
