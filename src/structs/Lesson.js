export default class Lesson {
  constructor(day, initialValue) {
    this.timetable = day.timetable;
    this.day = day;
    this.data = initialValue;
  }
}