import React, {useEffect} from 'react'
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
                                    {quiz.title}
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