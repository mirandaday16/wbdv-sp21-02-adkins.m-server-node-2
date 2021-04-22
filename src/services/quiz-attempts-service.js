const QUIZZES_URL = 'http://localhost:4000/api/quizzes';

export const findAttemptsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/attempts`)
        .then(response => response.json())
}

const api = {
    findAttemptsForQuiz
}


export default api
