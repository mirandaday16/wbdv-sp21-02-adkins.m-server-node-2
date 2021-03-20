const baseUrl = process.env.REACT_APP_WIDGET_URL

export const createWidget = (topicId, widget) =>
    fetch(`${baseUrl}/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${baseUrl}/topics/${topicId}/widgets`)
        .then(response => response.json())

export const findAllWidgets = () =>
    fetch(`${baseUrl}/widgets`)
        .then(response => response.json())


export const findWidgetById = (widgetId) => {}

export const updateWidget = (widgetId, widget) =>
    fetch(`${baseUrl}/widgets/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${baseUrl}/widgets/${widgetId}`, {
            method: "DELETE",
        })
        .then(response => response.json())



const api = {
    createWidget,
    findWidgetsForTopic,
    findAllWidgets,
    findWidgetById,
    updateWidget,
    deleteWidget,
}

export default api
