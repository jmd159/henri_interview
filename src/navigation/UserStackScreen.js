import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UsersScreen from "../screens/Users";

const UserStack = createStackNavigator();

export default function UserStackScreen() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="USERS" component={UsersScreen} />
    </UserStack.Navigator>
  );
}
