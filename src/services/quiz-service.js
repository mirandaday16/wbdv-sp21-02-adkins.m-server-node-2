const QUIZZES_URL = process.env.REACT_APP_QUIZ_URL;
export const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}
export const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}

export const submitQuiz = (qid, answers) => {
    return fetch(`${QUIZZES_URL}/${qid}/attempts`, {
        method: 'POST',
        body: JSON.stringify(answers),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(result => console.log(result))
}




export default {
    findAllQuizzes, findQuizById, submitQuiz
}
