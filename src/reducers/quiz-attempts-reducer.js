const initialState = {
    attempts: []
}

const attemptsReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'FIND_ATTEMPTS_FOR_QUIZ':
            return {
                ...state,
                attempts: action.attempts
            }
        default:
            return state
    }
}

export default attemptsReducer