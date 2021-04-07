import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import questionService from "../../services/question-service";

const Quiz = (
    questions = [],
    findQuestionsForQuiz
) => {
    const {quizId} = useParams()
    useEffect(() => {
        findQuestionsForQuiz(quizId)
    }, [findQuestionsForQuiz])
    return (
        <div>
            <h3>
                Quiz {quizId}
            </h3>
            <ul>
                {
                    questions && questions.map((question => {
                        return (
                            <li>
                                    {question.question}
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

export default Quiz