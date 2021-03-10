import React, {useState} from "react";
import {Link} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        title,
        owner,
        lastModified
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }
    const layout = "table"
    return (
        <tr className="mda-body-text">
            <td>
                {
                    !editing &&
                    <Link to={`/courses/${layout}/editor/${course._id}`} className="mda-link-text">
                    {title}
                </Link>
                }
                {
                    editing && <input
                    onChange={(event) => setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
                }
            </td>
            <td className="d-none d-sm-table-cell">{owner}</td>
            <td className="d-none d-xl-table-cell">{lastModified}</td>
            <td>
                <i onClick={() => deleteCourse(course)} className="fas mda-padded-icon mda-clickable-icon fa-trash"></i>
                {editing && <i onClick={() => saveTitle()} className="fas mda-padded-icon mda-clickable-icon fa-check"></i>}
                {!editing && <i onClick={() => setEditing(true)} className="fas mda-padded-icon mda-clickable-icon fa-edit"></i>}
            </td>

        </tr>)
}

export default CourseRow