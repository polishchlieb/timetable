import React from 'react';
import Swiper from 'react-native-swiper';
import Day from './Day';
import { Context } from './App';

export default function Timetable() {
  const { days } = React.useContext(Context);

  return (
    <Swiper showsButtons={false} showsPagination={false} loop={false}>
      {days.map((day, index) => (
        <Day day={day} key={index} />
      ))}
    </Swiper>
  );
}