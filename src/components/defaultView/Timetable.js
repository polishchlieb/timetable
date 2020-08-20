import React from 'react';
import Swiper from 'react-native-swiper';
import Day from './Day';
import Context from '../../Context';

export default function Timetable({ route }) {
  const { timetables } = React.useContext(Context);
  const { key } = route.params;

  const timetable = timetables[key];

  const { days } = timetable;

  return (
    <Swiper showsButtons={false} showsPagination={false} loop={false}>
      {days.map((day, index) => (
        <Day day={day} key={index} />
      ))}
    </Swiper>
  );
}