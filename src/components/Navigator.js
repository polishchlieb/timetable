import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Timetable from './defaultView/Timetable';
import AsyncStorage from '@react-native-community/async-storage';
import { Text } from 'react-native';
import Context from '../Context';

const Drawer = createDrawerNavigator();

const Temp = () => (
  <Text>dupa</Text>
);

export default function Navigator() {
  const [isReady, setIsReady] = React.useState(false);
  const { timetables, setTimetables } = React.useContext(Context);

  React.useEffect(() => {
    async function run() {
      const timetables = await AsyncStorage.getItem('timetables');
      if (timetables) {
        setTimetables(JSON.parse(timetables));
      } else {
        const defaultValue = [
          {
            name: 'timetable 1',
            days: [
              { name: 'monday', lessons: [] },
              { name: 'tuesday', lessons: [] },
              { name: 'wednesday', lessons: [] },
              { name: 'thursday', lessons: [] },
              { name: 'friday', lessons: [] }
            ]
          }
        ];
        AsyncStorage.setItem('timetables', JSON.stringify(defaultValue));
        setTimetables(defaultValue);
      }
      setIsReady(true);
    }

    run();
  });

  return (
    <>
      {isReady
        ? <Drawer.Navigator>
          {timetables.map((k, index) => (
            <Drawer.Screen key={index} name={k.name} component={Timetable} initialParams={{ key: index }} />
          ))}
          <Drawer.Screen name="dodaj" component={Temp} />
          <Drawer.Screen name="edytuj" component={Temp} />
        </Drawer.Navigator>
        : null}
    </>
  );
}