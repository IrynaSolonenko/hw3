import {Component} from "react";
import {Lesson} from './LessonClass';

export class LearningGroup extends Component{

    constructor(lessonName, amountOfStudents, teacherName) {
        super();
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