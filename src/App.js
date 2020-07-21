import React from 'react';
import Timetable from './Timetable';
import { createDrawerNavigator } from '@react-navigation/drawer'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddLessonModal from './AddLessonModal';

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
    setDays([
      {
        name: 'poniedziałek',
        lessons: [
          { name: 'lekcja', hall: '100', teacher: 'DU' },
          { name: 'inne -45 min z życia', hall: '200', teacher: 'PA' }
        ]
      },
      {
        name: 'wtorek',
        lessons: [
          { name: 'lekcj', hall: '300', teacher: 'JA' }
        ]
      }
    ]);
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
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}