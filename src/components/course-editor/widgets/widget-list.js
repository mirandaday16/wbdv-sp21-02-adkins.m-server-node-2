import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import widgetsService from '../../../services/widget-service'

const WidgetList = (
    {
        widgets=[],
        findAllWidgets
    }) => {
    useEffect(() => {
        findAllWidgets()
    }, [])
    return(
        <div className="mda-widget-window">
            <h3 className="mda-h3">Widget List</h3>
            <ul className="list-group">
                {widgets.map(widget =>
                <li className="list-group-item"
                    key={widget.id}>
                    {widget.type}
                </li>
                )}
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => ({
    findAllWidgets: () => {
        widgetsService.findAllWidgets()
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS",
                widgets: widgets
            }))
    }
})

export default connect(stpm, dtpm)
(WidgetList)