import React from "react";
import {Link} from "react-router-dom";

function CourseCard({course}) {
    return(
        <div className="col-3">
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="mda-h3">
                        <i className="fas mda-padded-icon fa-users"></i>
                        {course.title}
                    </h5>
                    <div className="mda-body-text">Owner: {course.owner}</div>
                    <div className="mda-body-text">Last Modified: {course.lastModified}</div>
                    <br/>
                    <Link to="/courses/editor" className="btn mda-btn mda-center-in-div">Edit {course.title}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CourseCard