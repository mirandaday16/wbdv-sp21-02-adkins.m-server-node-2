import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {Link, useParams} from "react-router-dom";

const LessonTabs = (
    {
        lessons=[],
        createLesson,
        deleteLesson,
        updateLesson
    }) => {
    const {courseId, moduleId} = useParams();
    return (<div className="col-8">
        <ul className="nav nav-tabs justify-content-end">
            {
                lessons.map(lesson =>
                    <li className='nav-item'>
                        <Link className="nav-link" aria-current="page">
                            <EditableItem
                                to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
                                item={lesson}
                                deleteItem={deleteLesson}
                                updateItem={updateLesson}>
                            </EditableItem>
                        </Link>
                    </li>
                )
            }
        </ul>
    </div>)
}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({
    createLesson: () => dispatch({type: 'CREATE_LESSON'}),
    deleteLesson: (item) => dispatch({
        type: 'DELETE_LESSON',
        lessonToDelete: item}),
    updateLesson: (lesson) => dispatch({
        type: 'UPDATE_LESSON',
        lesson
    })
})

export default connect(stpm, dtpm)
(LessonTabs)