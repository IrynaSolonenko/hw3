import {Component} from "react";

export class Course extends Component{

    constructor(courseName, totalLessons, availableTeachersAmount) {
        super();
        this.courseName = courseName;
        this.totalLessons = totalLessons;
        this.availableTeachersAmount = availableTeachersAmount;
    }
}