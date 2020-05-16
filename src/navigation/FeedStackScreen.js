import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FeedScreen from "../screens/Feed";
import CreatePostScreen from "../screens/Feed/module/form";

const FeedStack = createStackNavigator();

export default function FeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="FEED" component={FeedScreen} />
      <FeedStack.Screen name="CREATE POST" component={CreatePostScreen} />
    </FeedStack.Navigator>
  );
}
