const initialState = {
    lessons: [
        {_id: "123", title: "Lesson 123"},
        {_id: "456", title: "Lesson 456"},
        {_id: "789", title: "Lesson 789"},
    ]
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'CREATE_MODULE':
        case 'DELETE_MODULE':
        case 'UPDATE_MODULE':
        default:
            return state
    }
}

export default lessonReducer