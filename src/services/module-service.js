const MODULES_FOR_COURSE_URL = 'https://wbdv-generic-server.herokuapp.com/api/001367581/courses';
const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/001367581/modules';

// These two functions require the context of a specific course
export const createModule = (courseId, module) =>
    fetch(`${MODULES_FOR_COURSE_URL}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
    }
    })
        .then(response => response.json())


export const findModulesForCourse = (courseId) =>
    fetch(`${MODULES_FOR_COURSE_URL}/${courseId}/modules`)
        .then(response => response.json())


// The remaining functions call on modules without context
export const findModule = (moduleId) => {}

export const updateModule = (moduleId) => {}

export const deleteModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}`, {
        method: "DELETE",
    })
        .then(response => response.json())


const api = {
    createModule,
    findModulesForCourse,
    deleteModule
}

export default api