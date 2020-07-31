export default class Day {
  /**
   * @param {import('./Timetable').default} timetable 
   * @param initialValue 
   */
  constructor(timetable, initialValue) {
    this.timetable = timetable;
    this.data = initialValue;
  }

  patch(value) {
    Object.assign(this.data, value);
    this.timetable.save();
  }
}