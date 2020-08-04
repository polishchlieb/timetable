export default class Lesson {
  /**
   * @param {import('./Day').default} day 
   */
  constructor(day, initialValue) {
    this.timetable = day.timetable;
    this.day = day;
    this.data = initialValue;
  }

  patch(value) {
    Object.assign(this.data, value);
    return this.timetable.save();
  }

  /**
   * @returns {string}
   */
  get name() {
    return this.data.name;
  }

  /**
   * @returns {string}
   */
  get hall() {
    return this.data.hall;
  }

  /**
   * @returns {string}
   */
  get teacher() {
    return this.data.teacher;
  }
}