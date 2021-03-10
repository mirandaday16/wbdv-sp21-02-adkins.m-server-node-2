import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {Link, useParams} from "react-router-dom";
import topicsService from "../../services/topic-service"

const TopicPills = (
    {
        topics=[],
        createTopic,
        deleteTopic,
        updateTopic,
        findTopicsForLesson
    }) => {
    const {courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        findTopicsForLesson(lessonId)
    }, [moduleId, lessonId])
    return (<div className="col-8 mda-page-background">
        <ul className="nav nav-pills justify-content-end pills-section-underlined">
            {
                topics.map(topic =>
                            <EditableItem
                                to={`/courses/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                                item={topic}
                                type="topic"
                                itemId={topic._id}
                                deleteItem={deleteTopic}
                                updateItem={updateTopic}>
                            </EditableItem>
                )
            }
            <li className='nav-item'>
                <i onClick={() => createTopic(lessonId)} className='fas fa-plus-circle mda-padded-icon mda-toggle-icon'></i>
            </li>
        </ul>
    </div>)
}

const stpm = (state) => {
    return {
        topics: state.topicReducer.topics
    }
}

const dtpm = (dispatch) => ({
    createTopic: (lessonId) => {
        topicsService.createTopic(lessonId, {title: "New Topic"})
            .then(topicFromServer =>
                dispatch({
                    type: 'CREATE_TOPIC',
                    topic: topicFromServer
                }))
    },
    // TODO: Implement topic creation on front end
    deleteTopic: (item) => {
        topicsService.deleteTopic(item._id)
        .then(status => dispatch({
            type: 'DELETE_TOPIC',
            topicToDelete: item
        }))
},
    updateTopic: (topic) => {
        topicsService.updateTopic(topic._id, topic)
        .then(status => dispatch({
            type: 'UPDATE_TOPIC',
            topic
        }))
},
    findTopicsForLesson: (lessonId) =>
        topicsService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics: topics
            }))
})

export default connect(stpm, dtpm)
(TopicPills)