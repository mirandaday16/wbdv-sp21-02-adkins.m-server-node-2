const TOPICS_FOR_LESSON_URL = 'https://wbdv-generic-server.herokuapp.com/api/001367581/lessons/';
const TOPICS_URL = 'https://wbdv-generic-server.herokuapp.com/api/001367581/topics/';

// These two functions require the context of a specific lesson
export const createTopic = (lessonId, topic) => {}

export const findTopicsForLesson = (lessonId) => {}

// The remaining functions call on topics without context
export const findTopic = (topicId) => {}

export const updateTopic = (topicId) => {}

export const deleteTopic = (topicId) => {}
