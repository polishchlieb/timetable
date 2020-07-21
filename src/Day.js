import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Lesson from './Lesson';

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
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>{day.name}</Text>
      {day.lessons.map((lesson, index) => (
        <Lesson lesson={lesson} key={index} />
      ))}
    </View>
  );
}