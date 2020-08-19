import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Timetable from './defaultView/Timetable';
import AsyncStorage from '@react-native-community/async-storage';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

const Temp = () => (
  <Text>dupa</Text>
);

const Wrapper = () => Timetable({ days: [] });

export default function Navigator() {
  const [keys, setKeys] = React.useState([]);

  React.useEffect(() => {
    async function run() {
      setKeys(await AsyncStorage.getAllKeys());
    }

    run();
  });

  return (
    <Drawer.Navigator>
      {keys.map((k, index) => (
        <Drawer.Screen key={index} name={k} component={Wrapper} />
      ))}
      <Drawer.Screen name="dodaj" component={Temp} />
      <Drawer.Screen name="edytuj" component={Temp} />
    </Drawer.Navigator>
  );
}