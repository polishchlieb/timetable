import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddLessonModal from './AddLessonModal';
import EditLessonModal from './EditLessonModal';
import Context from '../Context';
import TimetableUtil from '../structs/Timetable';
import strings_en from '../strings/strings_en';
import Navigator from './Navigator';

const Stack = createStackNavigator();

export default function App() {
  const [days, setDays] = React.useState([]);

  React.useEffect(() => {
    async function run() {
      const timetable = await TimetableUtil.get('timetable1', strings_en);
      setDays(timetable.days);
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