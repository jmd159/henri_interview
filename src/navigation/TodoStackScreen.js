import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TodoScreen from "../screens/Todos";

const TodoStack = createStackNavigator();

export default function TodoStackScreen() {
  return (
    <TodoStack.Navigator>
      <TodoStack.Screen name="TODOS" component={TodoScreen} />
    </TodoStack.Navigator>
  );
}
