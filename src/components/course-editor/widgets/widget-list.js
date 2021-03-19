import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import widgetsService from '../../../services/widget-service'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from 'react-router-dom'

const WidgetList = (
    {
        widgets=[],
        findAllWidgets,
        findWidgetsForTopic
    }) => {
    const {topicId} = useParams();
    useEffect(() => {
        findWidgetsForTopic()
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
    },
    findWidgetsForTopic: (topicId) => {
        widgetsService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets: widgets
            }))
    }
})

export default connect(stpm, dtpm)
(WidgetList)