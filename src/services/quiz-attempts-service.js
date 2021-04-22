const QUIZZES_URL = process.env.REACT_APP_QUIZ_URL;

export const findAttemptsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/attempts`)
        .then(response => response.json())
}

const api = {
    findAttemptsForQuiz
}


export default api
