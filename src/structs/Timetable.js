import AsyncStorage from '@react-native-community/async-storage';
import Day from './Day';

export default class Timetable {
  static async get(name, strings) {
    const check = await AsyncStorage.getItem(name);
    if (check)
      return new Timetable(name, JSON.parse(check));

    const timetable = new Timetable(name, {
      name,
      days: [
        { name: strings.monday, lessons: [] },
        { name: strings.tuesday, lessons: [] },
        { name: strings.wednesday, lessons: [] },
        { name: strings.thursday, lessons: [] },
        { name: strings.friday, lessons: [] }
      ]
    });
    await timetable.save();

    return timetable;
  }

  static async loadAll() {
    const keys = await AsyncStorage.getAllKeys();
    const values = (await AsyncStorage.multiGet(keys))
      .map(([k, v]) => [k, JSON.parse(v)]);

    return values.map(([k, v]) => new Timetable(k, v));
  }

  /**
   * @param {string} key AsyncStorage key
   */
  constructor(key, initialValue) {
    this.key = key;
    this.data = initialValue;
    console.log(initialValue);
    this.days = initialValue.days.map(data => new Day(this, data));
  }

  async save() {
    await AsyncStorage.setItem(this.key, JSON.stringify(this.data));
  }

  /**
   * @returns {string}
   */
  get name() {
    return this.data.name;
  }
}