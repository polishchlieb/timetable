import React from 'react';
import Timetable from './Timetable';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Timetable 1') {
              iconName = focused
                ? 'bookmark'
                : 'bookmark-outline';
            } else if (route.name === 'Timetable 2') {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Timetable 1" component={Timetable} />
        <Tab.Screen name="Timetable 2" component={Timetable} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}