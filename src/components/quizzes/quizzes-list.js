import React, {useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import quizService from '../../services/quiz-service'
import {connect} from "react-redux";

const QuizzesList = (
    {
        quizzes = [],
        findAllQuizzes,
        findQuizById
    }
) => {
    useEffect(() => {
        findAllQuizzes()
    }, [findAllQuizzes])
    const {courseId} = useParams()
    return (
            <div>
                <h2>
                    Quizzes
                </h2>
                <ul>
                    {
                        quizzes && quizzes.map((quiz => {
                            return (
                                <li>
                                    <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                        {quiz.title}
                                    </Link>
                                </li>
                            )
                        }))
                    }
                </ul>
            </div>
    )
}

const stpm = (state) => {
    return {
        quizzes: state.quizReducer.quizzes
    }
}

const dtpm = (dispatch) => (
    {
        findAllQuizzes: () => {
            quizService.findAllQuizzes()
                .then(quizzes => dispatch({
                    type: "FIND_ALL_QUIZZES",
                    quizzes: quizzes
                }))
        }
    }
)

export default connect(stpm, dtpm)
(QuizzesList)