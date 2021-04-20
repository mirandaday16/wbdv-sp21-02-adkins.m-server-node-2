import React, {useState} from 'react'

const TrueFalseQuestion = ({question}) => {
    const [chosenAnswer, setChosenAnswer] = useState("")
    const [graded, setGraded] = useState(false)
    const highlight = (q) => {
        if ( graded && q === question.correct) {
            return "list-group-item-success"
        }
        else if (graded && q !== question.correct) {
            return "list-group-item-danger"
        }
        return ""
    }
    return (
        <>
            <li>
                <h4>
                    {question.question}
                    {
                        question.correct === chosenAnswer && graded &&
                        <i className="fas fa-check mda-padded-icon float-right"></i>
                    }
                    {
                        question.correct !== chosenAnswer && graded &&
                        <i className="fas fa-times mda-padded-icon-danger float-right"></i>
                    }
                </h4>
                <span className="h6 mda-body-text">
                    <ul className="list-group">
                    <li className={`list-group-item ${highlight("true")}`}>
                        <label>
                            <input type="radio"
                                   className="mda-padded-radio-button"
                                   name={question._id}
                               onClick={() => setChosenAnswer("true")}/>
                            True
                        </label>
                    </li>
                    <li className={`list-group-item ${highlight("false")}`}>
                            <label>
                                <input type="radio"
                                       className="mda-padded-radio-button"
                                       name={question._id}
                                       onClick={() => setChosenAnswer("false")}/>
                                False
                            </label>
                        </li>
                    </ul>
                <br/>
                    Your answer: {chosenAnswer}
                </span>
            </li>
            <br/>
            <hr/>
        </>
    )
}

export default TrueFalseQuestion