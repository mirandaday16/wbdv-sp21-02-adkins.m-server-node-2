import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question, addToAnswers}) => {
    return (
        <>
            {question.type === "TRUE_FALSE" &&
            <TrueFalseQuestion question={question} addToAnswers={addToAnswers}/>}

            {question.type === "MULTIPLE_CHOICE" &&
            <MultipleChoiceQuestion question={question} addToAnswers={addToAnswers}/>}
        </>
    )
}

export default Question