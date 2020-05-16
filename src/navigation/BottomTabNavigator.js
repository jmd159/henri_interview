import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserStackScreen from './UserStackScreen';
import TodoStackScreen from './TodoStackScreen';
import FeedStackScreen from './FeedStackScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Users') {
            iconName = 'user';
          } else if (route.name === 'Feed') {
            iconName = 'list';
          } else {
            iconName = 'clipboard';
          }
          return (
            <Icon
              name={iconName}
              size={size}
              color={color}
              style={{ marginTop: 10 }}
            />
          );
        }
      })}
    >
      <Tab.Screen name="Users" component={UserStackScreen} />
      <Tab.Screen name="Feed" component={FeedStackScreen} />
      <Tab.Screen name="Todos" component={TodoStackScreen} />
    </Tab.Navigator>
  );
}
