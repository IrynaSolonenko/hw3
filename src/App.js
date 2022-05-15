import './App.css';
import React from 'react';

  class ItSchool {
    constructor(name) {
      this.name = name;
      this.availableCourses = [];
      this.startedGroups = [];
    }

    registerCourse(courseName, totalLessons, availableTeachersAmount){
      if (this.availableCourses.find(course => course.courseName === courseName)) return;
      this.availableCourses.push(new Course(courseName, totalLessons, availableTeachersAmount))
    }

    startLearningGroup(courseName, teacherName, amountOfStudents){
      this.availableCourses.forEach(course => {
        if (course.courseName === courseName && course.availableTeachersAmount > 0){
          course.availableTeachersAmount--;
          this.startedGroups.push(new LearningGroup(courseName, amountOfStudents, teacherName))
        }
      })
    }
    endLearningGroup(courseName, teacherName){
      this.availableCourses.forEach(course=>{
        if (course.teacherName === teacherName || course.courseName === courseName){
          course.availableTeachersAmount++;
        }
      })
    }
    getLearningGroupByCourseName(courseName){
      this.startedGroups = this.startedGroups.filter(course => course.courseName === courseName);
    }
  }

  class Course {
    constructor(courseName, totalLessons, availableTeachersAmount) {
      this.courseName = courseName;
      this.totalLessons = totalLessons;
      this.availableTeachersAmount = availableTeachersAmount;
    }
  }

  class LearningGroup{
    constructor(lessonName, amountOfStudents, teacherName) {
      this.lessonName = lessonName;
      this.amountOfStudents = amountOfStudents;
      this.teacherName = teacherName;
      this.passedLessons = [];
    }
    doneLesson(lessonName, lessonSubject){
      if(this.passedLessons.find(lesson => lesson.lessonName !== lessonName))return;
      this.passedLessons.push(new Lesson(lessonName, lessonSubject))

    }
  }


  class Lesson{
    constructor(lessonName, lessonSubject) {
      this.lessonName = lessonName;
      this.lessonSubject = lessonSubject;
    }
  }

  let school = new ItSchool();



function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
