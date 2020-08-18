import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Context from '../Context';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

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

export default function EditLessonModal({ route: { params: {lesson } } }) {
  const navigation = useNavigation();
  const { setDays } = React.useContext(Context);

  const { name, hall, teacher } = lesson;
  const [state, dispatch] = React.useReducer(NewLessonReducer, { name, hall, teacher });

  const callback = () => {
    lesson.patch(state);
    setDays([...lesson.timetable.days]);
    navigation.goBack();
  }

  const deleteCallback = () => {
    lesson.remove();
    setDays([...lesson.timetable.days]);
    navigation.goBack();
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>{lesson.day.name}</Text>
      <TextInput placeholder="przedmiot" value={state.name}
        onChangeText={t => dispatch({ type: 'SET_NAME', payload: t })} />
      <TextInput placeholder="sala" value={state.hall}
        onChangeText={t => dispatch({ type: 'SET_HALL', payload: t })} />
      <TextInput placeholder="nauczyciel" value={state.teacher}
        onChangeText={t => dispatch({ type: 'SET_TEACHER', payload: t })} />
      <Button onPress={callback} title="edytowanko" />
      <Button onPress={deleteCallback} title="usun" />
    </View>
  );
}