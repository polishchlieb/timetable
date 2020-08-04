import AsyncStorage from '@react-native-community/async-storage';
import Day from './Day';

export default class Timetable {
  static async create(name) {
    if (await AsyncStorage.getItem(name))
      throw new Error('Timetable with given name already exists');

    const timetable = new Timetable(name, {
      name,
      days: [
        { name: 'poniedziałek', lessons: [] },
        { name: 'wtorek', lessons: [] },
        { name: 'środa', lessons: [] },
        { name: 'czwartek', lessons: [] },
        { name: 'piątek', lessons: [] }
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