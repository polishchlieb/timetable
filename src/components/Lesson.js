import React from 'react';
import { Text, useWindowDimensions, View, StyleSheet } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  name: {
    paddingLeft: 10,
  },
  nameWrapper: {
    flex: 5,
    backgroundColor: '#FF540E',
    justifyContent: 'center',
  },
  hall: {
    flex: 1.5,
    backgroundColor: '#FFCB26',
    justifyContent: 'center',
    alignItems: 'center'
  },
  teacher: {
    flex: 1.2,
    backgroundColor: '#5FD03C',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20
  }
});

export default function Lesson({ lesson }) {
  const navigation = useNavigation();

  const window = useWindowDimensions();

  const lessonStyles = StyleSheet.create({
    lessonView: {
      width: window.width,
      flexDirection: 'row',
      height: 50,
      borderBottomColor: 'black',
      borderBottomWidth: 1
    }
  });

  return (
    <View style={lessonStyles.lessonView}>
      <View style={styles.nameWrapper}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('edit', { lesson })}>
          <View style={styles.name}>
            <Text style={styles.text}>{lesson.name}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.hall}>
        <Text style={styles.text}>{lesson.hall}</Text>
      </View>
      <View style={styles.teacher}>
        <Text style={styles.text}>{lesson.teacher}</Text>
      </View>
    </View>
  );
}
