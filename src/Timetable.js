import React from 'react';
import { StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import Day from './Day';

const styles = StyleSheet.create({
  wrapper: {}
});

export default function Timetable() {
  const [days, setDays] = React.useState([]);

  React.useEffect(() => {
    async function run() {
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
    }

    run();
  }, []);

  return (
    <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false} loop={false}>
      {days.map((day, index) => (
        <Day day={day} key={index} />
      ))}
    </Swiper>
  );
}