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
    // Helper function to find last relevant index of array, based on code from
    // https://stackoverflow.com/questions/40929260/find-last-index-of-element-inside-array-by-certain-condition
    function findLastIndex(array, searchKey, searchValue) {
        var index = array.slice().reverse().findIndex(x => x.searchKey === searchValue);
        var count = array.length - 1
        var finalIndex = index >= 0 ? count - index : index;
        console.log(finalIndex)
        return finalIndex;
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
                                await quizService.submitQuiz(quizId, answers);
                                await findAttemptsForQuiz(quizId);
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
                            {
                                // display only attempts that belong to this quiz
                                attempts.filter(attempt => attempt.answers[0].quizId === quizId).map((attempt) => {
                                // highlight most recent attempt for this quiz
                                if (attempt === attempts[attempts.length + findLastIndex(attempts, 'answers[0].quizId', quizId)]){
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