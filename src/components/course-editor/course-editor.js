import React from "react";
import {Link} from "react-router-dom";
import ModuleList from "./module-list";
import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import LessonTabs from "./lesson-tabs";

// const store = createStore(moduleReducer)
const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer
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
                    {/*// Tab Menu*/}
                    <LessonTabs/>
                </div>

                <div class="row mda-widget-body">

                    {/*// Left Side Menu*/}
                    <ModuleList/>

                    {/*// Pills Menu*/}
                    <div class="col-8 mda-page-background">
                        <ul class="nav nav-pills justify-content-end pills-section-underlined">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Topic 1</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Topic 2</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Topic 3</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Topic 4</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fas fa-plus"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/*// Content intentionally left blank!*/}
                </div>
            </div>
        </div>
    </Provider>

export default CourseEditor