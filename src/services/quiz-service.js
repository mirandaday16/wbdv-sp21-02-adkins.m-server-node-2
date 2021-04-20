const QUIZZES_URL = 'http://localhost:4000/api/quizzes';
export const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}
export const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}

export const submitQuiz = (quizId, score, answers) => {
    return fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify({score: score, quiz: quizId, answers: answers}),
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
