import React, {useState} from 'react'

const MultipleChoiceQuestion = ({question}) => {
    const [chosenAnswer, setChosenAnswer] = useState("")
    return (
        <>
            <li>
                <h4>
                    {question.question}
                    {
                        question.correct === chosenAnswer &&
                            <i className="fas fa-check mda-padded-icon float-right"></i>
                    }
                </h4>
                <span className="h6 mda-body-text">
                    {
                        question.choices.map((choice) => {
                            return (
                                <div className="row">
                                    <label>
                                        <input type="radio"
                                               name={question._id}
                                               onClick={() => setChosenAnswer(choice)}
                                        /> {choice}
                                    </label>
                                </div>
                                )
                        })
                    }
                    Your answer: {chosenAnswer}
                </span>
            </li>
            <hr/>
        </>
    )
}

export default MultipleChoiceQuestion