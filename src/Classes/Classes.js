import {Component} from "react";
import {ItSchool} from "./ItSchoolClass";
import {Course} from "./CourseClass";
import {LearningGroup} from "./LearningGroupClass";
import {Lesson} from "./LessonClass";

export class Classes extends Component{
    render() {
        return(
            <>
                <ItSchool />
                <Course />
                <LearningGroup />
                <Lesson />
            </>
        )
    }
}