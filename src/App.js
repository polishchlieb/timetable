import React from 'react';
import Timetable from './Timetable';
import { createDrawerNavigator } from '@react-navigation/drawer'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddLessonModal from './AddLessonModal';
import AsyncStorage from '@react-native-community/async-storage';
import EditLessonModal from './EditLessonModal';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Navigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Timetable 1" component={Timetable} />
    </Drawer.Navigator>
  );
}

export const Context = React.createContext();

export default function App() {
  const [days, setDays] = React.useState([]);

  React.useEffect(() => {
    async function run() {
      const local = await AsyncStorage.getItem('days');

      if (local) {
        setDays(JSON.parse(local));
      } else {
        const defaultValue = [
          { name: 'poniedziałek', lessons: [] },
          { name: 'wtorek', lessons: [] },
          { name: 'środa', lessons: [] },
          { name: 'czwartek', lessons: [] },
          { name: 'piątek', lessons: [] }
        ];

        setDays(defaultValue);
        AsyncStorage.setItem('days', JSON.stringify(defaultValue));
      }
    }

    run();
  }, []);

  return (
    <Context.Provider value={{ days, setDays }}>
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
    </Context.Provider>
  );
}