import React from 'react';
import { StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import Day from './Day';
import { Context } from './App';

const styles = StyleSheet.create({
  wrapper: {}
});

export default function Timetable() {
  const { days } = React.useContext(Context);

  return (
    <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false} loop={false}>
      {days.map((day, index) => (
        <Day day={day} key={index} />
      ))}
    </Swiper>
  );
}