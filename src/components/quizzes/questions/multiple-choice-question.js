import React, {useState} from 'react'

const MultipleChoiceQuestion = ({question}) => {
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
                    {
                        question.choices.map((choice) => {
                            return (
                                <li className={`list-group-item ${highlight(choice)}`}>
                                    <label>
                                        <input type="radio"
                                               className="mda-padded-radio-button"
                                               name={question._id}
                                               onClick={() => setChosenAnswer(choice)}
                                        /> {choice}
                                    </label>
                                </li>
                                )
                        })
                    }
                    </ul>
                    <br/>
                    Your answer: {chosenAnswer}
                </span>
            </li>
            <br/>
            <div className="row">
                <div className="col-4 mda-center-in-div">
                    <button className="btn mda-btn"
                            onClick={() => setGraded(true)}>
                        Grade
                    </button>
                </div>
                <div className="col-8">
                </div>
            </div>
            <hr/>
        </>
    )
}

export default MultipleChoiceQuestion