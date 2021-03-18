import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import widgetsService from '../../../services/widget-service'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";

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
            <ul className="list-group">
                {widgets.map(widget =>
                <li className="list-group-item"
                    key={widget.id}>
                    {
                        widget.type === "HEADING" &&
                            <HeadingWidget widget={widget}/>
                    }
                    {
                        widget.type === "PARAGRAPH" &&
                        <ParagraphWidget widget={widget}/>
                    }
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