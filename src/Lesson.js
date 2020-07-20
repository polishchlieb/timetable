import React from 'react';
import { Text, useWindowDimensions, View, StyleSheet } from 'react-native';

export default function Lesson() {
	const window = useWindowDimensions();

	const styles = StyleSheet.create({
		lessonView: {
			width: window.width,
			flexDirection: 'row',
			height: 50,
			borderBottomColor: 'black',
			borderBottomWidth: 1
		},
		name: {
			flex: 5,
			backgroundColor: '#FF540E',
			justifyContent: 'center',
			paddingLeft: 10
		},
		hall: {
			flex: 1,
			backgroundColor: '#FFCB26',
			justifyContent: 'center',
			alignItems: 'center'
		},
		teacher: {
			flex: 1,
			backgroundColor: '#5FD03C',
			justifyContent: 'center',
			alignItems: 'center'
		},
		text: {
			fontSize: 20
		}
	});

	return (
		<View style={styles.lessonView}>
			<View style={styles.name}>
				<Text style={styles.text}>jakaś lekcyjka</Text>
			</View>
			<View style={styles.hall}>
				<Text style={styles.text}>sala</Text>
			</View>
			<View style={styles.teacher}>
				<Text style={styles.text}>NA</Text>
			</View>
		</View>
	);
}
