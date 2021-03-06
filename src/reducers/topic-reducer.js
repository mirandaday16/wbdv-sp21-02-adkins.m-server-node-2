const initialState = {
    topics: [
        {_id: "123", title: "Topic A"},
        {_id: "456", title: "Topic B"},
        {_id: "789", title: "Topic C"},
    ]
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'CREATE_MODULE':
        case 'DELETE_MODULE':
        case 'UPDATE_MODULE':
        default:
            return state
    }
}

export default topicReducer