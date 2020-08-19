import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddLessonModal from './editorView/AddLessonModal';
import EditLessonModal from './editorView/EditLessonModal';
import Navigator from './Navigator';
import ContextProvider from './ContextProvider';

const Stack = createStackNavigator();

// RNLocalize.getLocales()[0].languageCode

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator mode="modal">
          <Stack.Screen
            name="Main"
            component={Navigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="dodawanko" component={AddLessonModal} />
          <Stack.Screen name="edit" component={EditLessonModal} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}