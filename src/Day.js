import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Lesson from './Lesson';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  slide: {
    flex: 1
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10
  }
});

export default function Day({ day }) {
  const navigation = useNavigation();

  return (
    <View style={styles.slide}>
      <Text style={styles.title}>{day.name}</Text>
      {day.lessons.map((lesson, index) => (
        <Lesson lesson={lesson} key={index} />
      ))}
      <Button onPress={() => navigation.navigate('dodawanko', { day })} title="przycisk" />
    </View>
  );
}