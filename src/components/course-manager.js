import React from "react";
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/CourseGrid";
import CourseEditor from "./course-editor/course-editor";
import NavigationBar from "./navigation-bar";
import {Route, Link} from "react-router-dom";
import courseService from "../services/course-service";

class CourseManager extends React.Component {

    state = {
        courses: []
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({
                courses
            }))
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "me",
            lastModified: "never"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })))
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState
                        .courses
                        .filter(course => course !== courseToDelete)
                }))
            })
    }

    updateCourse = (updatedCourse) => {
        courseService.updateCourse(updatedCourse._id, updatedCourse)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses:
                        prevState.courses.map(course =>
                            course._id === updatedCourse._id ? updatedCourse : course)
                }))
            })
    }

    render() {
        return (
            <div className="container-fluid mda-background">


                <Route path="/courses/table">
                    <NavigationBar addCourse={this.addCourse}/>
                    <div className="mda-page-content">
                        <CourseTable
                            courses={this.state.courses}
                            addCourse={this.addCourse}
                            deleteCourse={this.deleteCourse}
                            updateCourse={this.updateCourse}/>
                    </div>
                </Route>

                <Route path="/courses/grid">
                    <NavigationBar addCourse={this.addCourse}/>
                    <div className="mda-page-content">
                        <CourseGrid
                            courses={this.state.courses}
                            addCourse={this.addCourse}
                            deleteCourse={this.deleteCourse}
                            updateCourse={this.updateCourse}/>
                    </div>
                </Route>

                <Route path={[
                        "/courses/editor/:courseId/:moduleId",
                        // "/courses/editor/:courseId/:moduleId/:lessonId",
                        // "/courses/editor/:courseId/:moduleId/:lessonId/:topicId",
                ]}
                       render={(props) =>
                               <CourseEditor props={props}/>}>
                </Route>

            </div>

        )
    }

}

export default CourseManager