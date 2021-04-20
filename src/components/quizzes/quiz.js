import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import questionService from "../../services/question-service";
import quizService from "../../services/quiz-service"
import {connect} from "react-redux";
import Question from "./questions/question";

const Quiz = (
    {
        questions = [],
        submitQuiz,
        findQuestionsForQuiz
    }
) => {
    const {quizId} = useParams()
    useEffect(() => {
        findQuestionsForQuiz(quizId)
    }, [])
    return (
        <div>
            <h3 className="mda-h3">
                Quiz {quizId}
            </h3>
            <hr/>
            <ol className="mda-h4">
                {
                    questions.map((question =>
                        <Question question={question}/>
                    ))
                }
            </ol>
            <br/>
            <br/>
            <div className="row">
                <div className="col-4 mda-center-in-div">
                    <button className="btn mda-btn"
                            onClick={() => submitQuiz(quizId, questions)}>
                        Grade
                    </button>
                </div>
                <div className="col-8">
                </div>
            </div>
            <br/>
            <br/>
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
        },
        submitQuiz: (quizId, questions) => {
            quizService.submitQuiz(quizId, questions)
                .then(response => response.json())
                .then(result => console.log(result))
        }
    }

)

export default connect(stpm, dtpm)
(Quiz)