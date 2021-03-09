const COURSES_URL = 'https://wbdv-generic-server.herokuapp.com/api/001367581/courses';

export const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json())

export const createCourse = (course) =>
    fetch(COURSES_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(course)
    })
        .then(response => response.json())

export const findCourseById = (id) =>
    fetch(`${COURSES_URL}/${id}`, {
        method: 'GET'
    })
        .then(response => response.json())

export const updateCourse = (id, course) =>
    fetch(`${COURSES_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(course)
    })
        .then(response => response.json())


export const deleteCourse = (id) =>
    fetch(`${COURSES_URL}/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export default {
    findAllCourses,
    deleteCourse,
    createCourse,
    updateCourse,
    findCourseById
}