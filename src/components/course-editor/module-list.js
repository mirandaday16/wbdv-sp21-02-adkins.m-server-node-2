import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom';
import moduleService from "../../services/module-service"

const ModuleList = (
    {
        myModules = [],
        createModule,
        deleteModule,
        updateModule,
        findModulesForCourse
    }) => {
    const {courseId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])
    return (
        <div className="col-4">
            <ul className="modules-list-group">
                {
                    myModules.map(module =>
                        <li className='list-group-item'>
                            <EditableItem
                                to={`/courses/editor/${courseId}/${module._id}`}
                                item={module}
                                updateItem={updateModule}
                                deleteItem={deleteModule}>
                            </EditableItem>
                        </li>
                    )
                }
                <li className='list-group-item'>
                    <i onClick={() => createModule(courseId)} className='fas fa-plus-circle mda-toggle-icon'></i>
                </li>
            </ul>
        </div>)
}

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModule(courseId, {title: "New Module"})
                .then(moduleFromServer =>
                    dispatch({
                        type: 'CREATE_MODULE',
                        module: moduleFromServer
                    }))
        },
        deleteModule: (item) => {
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: 'DELETE_MODULE',
                    moduleToDelete: item
                }))
        },
        updateModule: (module) => {
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: 'UPDATE_MODULE',
                    module
                }))
        },
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(modules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: modules
                }))
        }
    }
}

export default connect(stpm, dtpm)
(ModuleList)