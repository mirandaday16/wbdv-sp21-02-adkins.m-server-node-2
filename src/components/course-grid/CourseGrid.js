import React from "react";
import CourseCard from "./CourseCard";
import {Link} from "react-router-dom";

function CourseGrid({courses, addCourse, deleteCourse, updateCourse}) {
    return (
        <div>
            <Link to="/courses/table">
                <i className="fas fa-2x fa-list float-right"></i>
            </Link>
            <h1 className="mda-h1">Course Manager</h1>
            <br/>
            <div className="row">
                {courses.map(course =>
                    <CourseCard course={course}/>
                )
                }
            </div>
            <div className="fab" onClick={addCourse}><i className="fas fa-plus"></i></div>
        </div>
    );
}

export default CourseGrid