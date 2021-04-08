import React from 'react'

const TrueFalseQuestion = ({question}) => {
    return (
        <>
            <li>
                <h4>
                    {question.title}
                </h4>
                <p>
                    {question.question}
                </p>
            </li>
        </>
    )
}

export default TrueFalseQuestion