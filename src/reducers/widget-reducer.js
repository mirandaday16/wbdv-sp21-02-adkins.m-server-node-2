const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'CREATE_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => {
                    return widget.id !== action.widgetToDelete;
                })
            }
        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        return action.widget
                    } else {
                        return widget
                    }
                })
            }
        case 'FIND_WIDGETS_FOR_TOPIC':
            return {
                ...state,
                widgets: action.widgets
            }
        case 'FIND_ALL_WIDGETS':
            return {
                ...state,
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default widgetReducer