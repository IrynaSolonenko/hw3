import {Component} from "react";
import {Course} from './CourseClass';
import {LearningGroup} from './LearningGroupClass';

export class ItSchool extends Component{
    constructor(name) {
        super();
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
            if (course.courseName === courseName && course.availableTeachersAmount){
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