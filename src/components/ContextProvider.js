import React from 'react';
import Context from '../Context';

export default function ContextProvider({ children }) {
  const selectedDay = React.useRef();
  const selectedLesson = React.useRef();

  return (
    <Context.Provider value={{ selectedDay, selectedLesson }}>
      {children}
    </Context.Provider>
  );
}