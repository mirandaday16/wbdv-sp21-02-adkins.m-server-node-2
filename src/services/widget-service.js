const baseUrl = "http://localhost:8080/api"

export const createWidget = (topicId, widget) => {}

export const findWidgetsForTopic = (topicId) => {}

export const findAllWidgets = () =>
    fetch(`${baseUrl}/widgets`)
        .then(response => response.json())


export const findWidgetById = (widgetId) => {}

export const updateWidget = (widgetId, widget) => {}

export const deleteWidget = (widgetId) => {}



const api = {
    createWidget,
    findWidgetsForTopic,
    findAllWidgets,
    findWidgetById,
    updateWidget,
    deleteWidget,
}

export default api
