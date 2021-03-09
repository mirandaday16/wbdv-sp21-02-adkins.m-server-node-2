const TOPICS_FOR_LESSON_URL = 'https://wbdv-generic-server.herokuapp.com/api/001367581/lessons';
const TOPICS_URL = 'https://wbdv-generic-server.herokuapp.com/api/001367581/topics';

// These two functions require the context of a specific lesson
export const createTopic = (lessonId, topic) =>
    fetch(`${TOPICS_FOR_LESSON_URL}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`${TOPICS_FOR_LESSON_URL}/${lessonId}/topics`)
        .then(response => response.json())

// The remaining functions call on topics without context
export const updateTopic = (topicId, topic) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: "DELETE",
    })
        .then(response => response.json())

const api = {
    createTopic,
    findTopicsForLesson,
    deleteTopic,
    updateTopic,
}

export default api
