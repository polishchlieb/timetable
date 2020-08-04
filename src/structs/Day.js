import Lesson from './Lesson';

export default class Day {
  /**
   * @param {import('./Timetable').default} timetable 
   * @param initialValue 
   */
  constructor(timetable, initialValue) {
    this.timetable = timetable;
    this.data = initialValue;
    this.lessons = initialValue.lessons.map(data => new Lesson(this, data));
  }

  patch(value) {
    Object.assign(this.data, value);
    return this.timetable.save();
  }

  get name() {
    return this.data.name;
  }
}