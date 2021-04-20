import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import questionService from "../../services/question-service";
import quizService from "../../services/quiz-service"
import {connect} from "react-redux";
import Question from "./questions/question";

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

    const answers = [];
    const addToAnswers = (question, userAnswer) => {
        const answerObject = {
            ...question,
            answer: userAnswer
        }
        answers.push(answerObject)
    }

    return (
        <div>
            <h3 className="mda-h3">
                Quiz {quizId}
            </h3>
            <hr/>
            <ol className="mda-h4">
                {
                    questions.map((question =>
                        <Question question={question} addToAnswers={addToAnswers}/>
                    ))
                }
            </ol>
            <br/>
            <br/>
            <div className="row">
                <div className="col-4 mda-center-in-div">
                    <button className="btn mda-btn"
                            onClick={() => {
                                console.log(JSON.stringify(answers))
                                quizService.submitQuiz(quizId, answers);
                            }}>
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
        }

    }

)

export default connect(stpm, dtpm)
(Quiz)