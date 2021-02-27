import React from "react";
import CourseCard from "./CourseCard";
import {Link} from "react-router-dom";

function CourseGrid({courses}) {
    return (
        <div>
            <Link to="/courses/table">
                <i className="fas fa-2x fa-list float-right"></i>
            </Link>
            <h3 className="mda-h3">Course Grid {courses.length}</h3>
            <div className="row">
                {courses.map(course =>
                    <CourseCard course={course}/>
                )
                }
            </div>
        </div>
    );
}

export default CourseGrid