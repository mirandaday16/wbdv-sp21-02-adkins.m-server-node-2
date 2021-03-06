import React from 'react'
import {connect} from 'react-redux'
import topicReducer from "../../reducers/topic-reducer";

const TopicPills = (
    {
        topics=[
            {_id: "123", title: "Topic A"},
            {_id: "456", title: "Topic B"},
            {_id: "789", title: "Topic C"},
        ]
    }) =>
    <div className="col-8 mda-page-background">
        <ul className="nav nav-pills justify-content-end pills-section-underlined">
            {
                topics.map(topic =>
                    <li className='nav-item'>
                        <a className="nav-link" href="#">{topic.title}</a>
                    </li>
                )
            }
        </ul>
    </div>

const stpm = (state) => {
    return {
        topics: state.topicReducer.topics
    }
}

const dtpm = (dispatch) => {}

export default connect(stpm, dtpm)
(TopicPills)