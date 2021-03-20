const baseUrl = "http://localhost:8080/api"

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

export const updateWidget = (widgetId, widget) => {}

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
