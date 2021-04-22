import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import questionService from "../../services/question-service";
import attemptsService from "../../services/quiz-attempts-service"
import quizService from "../../services/quiz-service"
import {connect} from "react-redux";
import Question from "./questions/question";

const Quiz = (
    {
        questions = [],
        findQuestionsForQuiz,
        attempts = [],
        findAttemptsForQuiz,
    }
) => {
    const {quizId} = useParams()
    const [finished, setFinished] = useState(false)
    useEffect(() => {
        findQuestionsForQuiz(quizId)
        findAttemptsForQuiz(quizId)
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
                            onClick={async () => {
                                console.log(JSON.stringify(answers))
                                await quizService.submitQuiz(quizId, answers);
                                await findAttemptsForQuiz();
                                setFinished(true)
                            }}>
                        Grade
                    </button>
                </div>
                <div className="col-8">
                    {
                        finished &&
                        <span className="mda-h5 float-right">
                            Quiz sumbitted!
                        </span>
                    }
                </div>
            </div>
            {
                finished &&
                    <>
                        <br/>
                        <div className="mda-widget-window mda-widget-body">
                    <p className="mda-h3 mda-center-in-div">
                        All quiz attempts:
                    </p>
                        <ol>
                            {attempts.map((attempt, index) => {
                                if (index === attempts.length - 1) {
                                    return (
                                        <li className="mda-highlighted-score">
                                            {attempt.score.toFixed(2)}%
                                            <span className="float-right mda-padded-icon">
                                                This quiz
                                            </span>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li>
                                            {attempt.score.toFixed(2)}%
                                        </li>
                                    )
                                }
                            })}
                        </ol>
                        </div>
                    </>
            }
            <br/>
            <br/>
        </div>
    )
}

const stpm = (state) => {
    return {
        questions: state.questionReducer.questions,
        attempts: state.attemptsReducer.attempts
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
        findAttemptsForQuiz: (quizId) => {
            attemptsService.findAttemptsForQuiz(quizId)
                .then(attempts => dispatch({
                    type: "FIND_ATTEMPTS_FOR_QUIZ",
                    attempts: attempts
                }))
        }

    }


)

export default connect(stpm, dtpm)
(Quiz)