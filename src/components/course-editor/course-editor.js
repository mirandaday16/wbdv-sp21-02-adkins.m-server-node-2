import React from "react";
import {Link} from "react-router-dom";
import ModuleList from "./module-list";
import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import topicReducer from "../../reducers/topic-reducer";

// const store = createStore(moduleReducer)
const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

const store = createStore(reducer)

const CourseEditor = ({props}) =>
    <Provider store={store}>
        <div className="mda-page-content">
            <div class="container shadow mda-widget-window">
                {/*// Headline*/}
                <h1 class="mda-h1">Course Editor
                    <i onClick={() => props.history.goBack()} className="fas fa-times-circle float-right"></i>
                </h1>

                <div class="form-group row">
                    <label class="col-4 col-form-label"></label>
                    <LessonTabs/>
                </div>
                <div class="row mda-widget-body">
                    <ModuleList/>
                    <TopicPills/>
                    {/*// Content intentionally left blank!*/}
                </div>
            </div>
        </div>
    </Provider>

export default CourseEditor