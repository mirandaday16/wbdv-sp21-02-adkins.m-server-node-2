const MODULES_FOR_COURSE_URL = 'https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/courses/COURSE_ID/modules';
const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/modules/MODULE_ID';

// These two functions require the context of a specific course
export const createModule = (courseId, module) => {}

export const findModulesForCourse = (courseId) => {}

// The remaining functions call on modules without context
export const findModule = (moduleId) => {}

export const updateModule = (moduleId) => {}

export const deleteModule = (moduleId) => {}
