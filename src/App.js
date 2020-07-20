import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import Lesson from './Lesson';

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10
  }
});

function App() {
  const days = [
    { name: 'poniedziałek' },
    { name: 'wtorek' },
    { name: 'środa' },
    { name: 'czwartek' },
    { name: 'piątek' }
  ];

  return (
    <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false} loop={false}>
      {days.map((day, index) => (
        <View key={index} style={styles.slide}>
          <Text style={styles.title}>{day.name}</Text>
          <Lesson />
          <Lesson />
        </View>
      ))}
    </Swiper>
  );
}

export default App;
