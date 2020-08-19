import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Timetable from './Timetable';

const Drawer = createDrawerNavigator();

export default function Navigator() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Timetable 1" component={Timetable} />
		</Drawer.Navigator>
	);
}