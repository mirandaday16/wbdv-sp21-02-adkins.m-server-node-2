import React from "react";
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/courses/grid">
                    <i className="fas fa-2x fa-th mda-toggle-icon float-right"></i>
                </Link>
                <h1 className="mda-h1">Course Manager</h1>
                <br/>
                <table className="table">
                    <tbody>
                    {this.props.courses.map((course, ndx) =>
                        <CourseRow
                            key={ndx}
                            deleteCourse={this.props.deleteCourse}
                            updateCourse={this.props.updateCourse}
                            course={course}
                            title={course.title}
                            owner={course.owner}
                            lastModified={course.lastModified}
                        />
                    )
                    }
                    </tbody>

                </table>
                <div className="fab" onClick={this.props.addCourse}><i className="fas fa-plus"></i></div>
            </div>
        )
    }
}