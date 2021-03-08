const LESSONS_FOR_MODULE_URL = 'https://wbdv-generic-server.herokuapp.com/api/001367581/modules/';
const LESSONS_URL = 'https://wbdv-generic-server.herokuapp.com/api/001367581/lessons/';

// These two functions require the context of a specific module
export const createLesson = (moduleId, lessonId) => {}

export const findLessonsForModule = (moduleId) => {}

// The remaining functions call on lessons without context
export const findLesson = (lessonId) => {}

export const updateLesson = (lessonId) => {}

export const deleteLesson = (lessonId) => {}
