const MODULES_FOR_COURSE_URL = 'https://wbdv-generic-server.herokuapp.com/api/001367581/courses/';
const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/001367581/modules/';

// These two functions require the context of a specific course
export const createModule = (courseId, module) => {}

export const findModulesForCourse = (courseId) => {
    fetch(`${MODULES_FOR_COURSE_URL}/${courseId}/modules`)
        .then(response => response.json())
}

// The remaining functions call on modules without context
export const findModule = (moduleId) => {}

export const updateModule = (moduleId) => {}

export const deleteModule = (moduleId) => {}

const api = {
    findModulesForCourse
}

export default api