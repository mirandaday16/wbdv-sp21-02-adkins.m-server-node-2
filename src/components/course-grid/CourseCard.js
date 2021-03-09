import React, {useState} from "react";
import {Link} from "react-router-dom";

function CourseCard({course, updateCourse, deleteCourse}) {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card" style={{width: "18rem", margin: "10px"}}>
                <div className="card-body">
                    <h5 className="mda-h3">
                        <i className="fas mda-padded-icon fa-users"></i>
                        {
                            !editing &&
                            <Link to={`/courses/editor/${course._id}`} className="mda-link-text">
                                {course.title}
                            </Link>
                        }
                        {
                            editing &&
                            <input
                                onChange={(event) => setNewTitle(event.target.value)}
                            value={newTitle}
                            className="form-control"
                            />
                        }
                        <i onClick={() => deleteCourse(course)}
                           className="fas mda-padded-icon mda-clickable-icon fa-trash float-right"></i>
                        {editing && <i onClick={() => saveTitle()}
                                       className="fas mda-padded-icon mda-clickable-icon fa-check float-right"></i>}
                        {!editing && <i onClick={() => setEditing(true)}
                                        className="fas mda-padded-icon mda-clickable-icon fa-edit float-right"></i>}
                    </h5>
                    <div className="mda-body-text">Owner: {course.owner}</div>
                    <div className="mda-body-text">Last Modified: {course.lastModified}</div>
                    <br/>
                    <Link to={`/courses/editor/${course._id}`} className="btn mda-btn mda-center-in-div">Edit {course.title}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CourseCard