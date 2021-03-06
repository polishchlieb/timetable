import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Context from '../../Context';

const defaultValue = { name: '', hall: '', teacher: '' };
const NewLessonReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_HALL':
      return { ...state, hall: action.payload };
    case 'SET_TEACHER':
      return { ...state, teacher: action.payload };
    case 'CLEAR':
      return defaultValue;
    default:
      throw new Error('Unknown action type');
  }
}

export default function AddLessonModal() {
  const navigation = useNavigation();
  const { setDays, selectedDay } = React.useContext(Context);
  const day = selectedDay.current;
  const [state, dispatch] = React.useReducer(NewLessonReducer, defaultValue);

  const handleButtonPress = async () => {
    await day.addLesson(state);
    console.log(day.timetable.days);
    setDays([...day.timetable.days]);
    dispatch({ type: 'CLEAR' });
    navigation.goBack();
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>{day.name}</Text>
      <TextInput placeholder="przedmiot"
        onChangeText={t => dispatch({ type: 'SET_NAME', payload: t })} />
      <TextInput placeholder="sala"
        onChangeText={t => dispatch({ type: 'SET_HALL', payload: t })} />
      <TextInput placeholder="nauczyciel"
        onChangeText={t => dispatch({ type: 'SET_TEACHER', payload: t })} />
      <Button onPress={handleButtonPress} title="dodaj" />
    </View>
  );
}