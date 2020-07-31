import AsyncStorage from '@react-native-community/async-storage';

export default class Timetable {
  static create() {

  }

  /**
   * @param {string} key AsyncStorage key
   * @param initialValue 
   */
  constructor(key, initialValue) {
    this.key = key;
    this.data = initialValue;
  }

  async save() {
    await AsyncStorage.setItem(this.key, JSON.stringify(this.data));
  }

  /**
   * @returns {any[]}
   */
  get days() {
    return this.data.days;
  }

  /**
   * @returns {string}
   */
  get name() {
    return this.data.name;
  }
}