const LESSONS_FOR_MODULE_URL = 'https://wbdv-generic-server.herokuapp.com/api/001367581/modules';
const LESSONS_URL = 'https://wbdv-generic-server.herokuapp.com/api/001367581/lessons';

// These two functions require the context of a specific module
export const createLesson = (moduleId, lesson) =>
    fetch(`${LESSONS_FOR_MODULE_URL}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const findLessonsForModule = (moduleId) =>
    fetch(`${LESSONS_FOR_MODULE_URL}/${moduleId}/lessons`)
        .then(response => response.json())


// The remaining functions call on lessons without context
export const updateLesson = (lessonId, lesson) =>
    fetch(`${LESSONS_URL}/${lessonId}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const deleteLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}`, {
        method: "DELETE",
    })
        .then(response => response.json())


const api = {
    createLesson,
    findLessonsForModule,
    deleteLesson,
    updateLesson,
}

export default api