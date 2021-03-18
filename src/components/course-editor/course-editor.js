import React from "react";
import {Link, Route, useLocation, useParams} from "react-router-dom";
import ModuleList from "./module-list";
import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import topicReducer from "../../reducers/topic-reducer";
import moduleService from '../../services/module-service'
import WidgetList from "./widgets/widget-list";
import widgetReducer from "../../reducers/widget-reducer";

// const store = createStore(moduleReducer)
const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

const store = createStore(reducer)

// componentDidUpdate() {
//     moduleService.findModulesForCourse()
//         .then(modules => this.setState({
//             modules
//         }))
// }

const CourseEditor = ({props}) => {
    const {courseId, moduleId} = useParams();
    const location = useLocation();
    const path = location["pathname"]
    const goBackPath = path.includes("grid") ? "/courses/grid" : "/courses/table"
    return (<Provider store={store}>
        <div className="mda-page-content">
            <div class="container shadow mda-widget-window">
                {/*// Headline*/}
                <h1 className="mda-h1">Course Editor
                    <Link to={goBackPath}>
                    <i className="fas fa-times-circle float-right mda-clickable-icon"></i>
                    </Link>
                </h1>

                <div class="form-group row">
                    <label class="col-4 col-form-label"></label>
                    <Route path="/courses/:layout/editor/:courseId/:moduleId">
                        {/*Should only be visible when a module is selected*/}
                        <LessonTabs props={props}/>
                    </Route>
                </div>
                <div class="row mda-widget-body">
                    <ModuleList props={props}/>
                    <div className="col-8 mda-page-background">
                    <Route path="/courses/:layout/editor/:courseId/:moduleId/:lessonId">
                        {/*Should only be visible when a lesson is selected*/}
                        <TopicPills props={props}/>
                    </Route>
                        <WidgetList/>
                    </div>
                </div>
            </div>
        </div>
    </Provider>)
}

export default CourseEditor