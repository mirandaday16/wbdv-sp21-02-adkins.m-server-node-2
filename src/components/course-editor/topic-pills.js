import React from 'react'
import {connect} from 'react-redux'
import topicReducer from "../../reducers/topic-reducer";
import EditableItem from "../editable-item";
import {Link, useParams} from "react-router-dom";

const TopicPills = (
    {
        topics=[],
        createTopic,
        deleteTopic,
        updateTopic
    }) => {
    // const {courseId, moduleId, lessonId} = useParams();
    return (<div className="col-8 mda-page-background">
        <ul className="nav nav-pills justify-content-end pills-section-underlined">
            {
                topics.map(topic =>
                    <li className='nav-item'>
                        <a className="nav-link" href="#">
                            <EditableItem
                                item={topic}
                                deleteItem={deleteTopic}
                                updateItem={updateTopic}>
                            </EditableItem>
                        </a>
                    </li>
                )
            }
        </ul>
    </div>)
}

const stpm = (state) => {
    return {
        topics: state.topicReducer.topics
    }
}

const dtpm = (dispatch) => ({
    createTopic: () => dispatch({type: 'CREATE_TOPIC'}),
    deleteTopic: (item) => dispatch({
        type: 'DELETE_TOPIC',
        topicToDelete: item
    }),
    updateTopic: (topic) => dispatch({
        type: 'UPDATE_TOPIC',
        topic
    })
})

export default connect(stpm, dtpm)
(TopicPills)