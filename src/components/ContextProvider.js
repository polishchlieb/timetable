import React from 'react';
import Context from '../Context';

export default function ContextProvider({ children }) {
  const selectedDay = React.useRef();
  const selectedLesson = React.useRef();
  const [timetables, setTimetables] = React.useState([]);

  return (
    <Context.Provider value={{ selectedDay, selectedLesson, timetables, setTimetables }}>
      {children}
    </Context.Provider>
  );
}