import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import moduleReducer from "./reducers/modules-reducer";
import lessonReducer from "./reducers/lesson-reducer";
import topicReducer from "./reducers/topic-reducer";
import widgetReducer from "./reducers/widget-reducer";
import quizReducer from "./reducers/quiz-reducer";
import {Provider} from "react-redux";

function App() {
    const reducer = combineReducers({
        moduleReducer: moduleReducer,
        lessonReducer: lessonReducer,
        topicReducer: topicReducer,
        widgetReducer: widgetReducer,
        quizReducer: quizReducer
    })

    const store = createStore(reducer)
    return (
        <Provider store={store}>
            <BrowserRouter>
                <CourseManager/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
