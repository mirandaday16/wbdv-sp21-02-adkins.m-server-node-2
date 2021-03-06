import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";

const LessonTabs = (
    {
        lessons=[],
        createLesson=() => alert("Create Lesson 234"),
        deleteLesson=(item) => alert(`delete ${item._id}`)
    }) =>

    <div className="col-8">
        <ul className="nav nav-tabs justify-content-end">
            {
                lessons.map(lesson =>
                    <li className='nav-item'>
                        <a className="nav-link" aria-current="page" href="#">
                            <EditableItem
                                item={lesson}
                                deleteItem={deleteLesson}>
                            </EditableItem>
                        </a>
                    </li>
                )
            }
        </ul>
    </div>

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({
    createLesson: () => dispatch({type: 'CREATE_LESSON'}),
    deleteLesson: (item) => dispatch({
        type: 'DELETE_LESSON',
        lessonToDelete: item})
})

export default connect(stpm, dtpm)
(LessonTabs)