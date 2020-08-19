import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Lesson from './Lesson';
import Context from '../../Context';

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
  const navigation = useNavigation();
  const { selectedDay } = React.useContext(Context);

  const handleButtonPress = () => {
    selectedDay.current = day;
    navigation.navigate('dodawanko');
  }

  return (
    <View style={styles.slide}>
      <Text style={styles.title}>{day.name}</Text>
      {day.lessons.length
        ? day.lessons.map((lesson, index) => (
          <Lesson lesson={lesson} key={index} />
        ))
        : <Text>Nic tu nie ma, hurra 😄</Text>}
      <Button onPress={handleButtonPress} title="przycisk" />
    </View>
  );
}