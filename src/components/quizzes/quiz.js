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

    const [answers, setAnswers] = useState([]);
    const addToAnswers = (question, userAnswer) => {
        const answerObject = {
            ...question,
            answer: userAnswer
        }
        setAnswers({
            ...answers,
            answerObject
        })
        console.log(answers)
    }

    const [score, setScore] = useState(0);
    const calculateScore = () => {
        let total = 0;
        let userAnswer;
        for (userAnswer in answers) {
            const correctAnswer = questions.find(question => question._id === userAnswer._id)
            if (correctAnswer.answer === userAnswer.answer) {
                total += 1;
            }
        }
         setScore(total / questions.length)
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
                                calculateScore();
                                quizService.submitQuiz(quizId, score, answers);
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