import {Component} from "react";

export class Lesson extends Component{
    constructor(lessonName, lessonSubject) {
        super();
        this.lessonName = lessonName;
        this.lessonSubject = lessonSubject;
    }
}