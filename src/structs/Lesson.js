export default class Lesson {
  /**
   * @param {import('./Day').default} day 
   */
  constructor(day, initialValue) {
    this.timetable = day.timetable;
    this.day = day;
    this.data = initialValue;
  }

  remove() {
    const index = this.day.data.lessons.indexOf(this.data);
    this.day.data.lessons.splice(index, 1);
    this.day.lessons.splice(index, 1);
    return this.timetable.save();
  }

  patch(data) {
    Object.assign(this.data, data);
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