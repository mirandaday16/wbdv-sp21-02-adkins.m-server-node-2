import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import questionService from "../../services/question-service";
import {connect} from "react-redux";
import Question from "./questions";

const Quiz = (
    {
        questions = [],
        findQuestionsForQuiz
    }
) => {
    const {quizId} = useParams()
    useEffect(() => {
        findQuestionsForQuiz(quizId)
    }, [])
    return (
        <div>
            <h3>
                Quiz {quizId}
            </h3>
            <ul>
                {
                    questions.map((question => {
                        return (
                            <Question question={question}/>
                        )
                    }))
                }
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        questions: state.questionReducer.questions
    }
}

const dtpm = (dispatch) => (
    {
        findQuestionsForQuiz: (quizId) => {
            questionService.findQuestionsForQuiz(quizId)
                .then(questions => dispatch({
                    type: "FIND_QUESTIONS_FOR_QUIZ",
                    questions: questions
                }))
        }
    }
)

export default connect(stpm, dtpm)
(Quiz)