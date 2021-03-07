import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom';

const ModuleList = (
    {
        myModules = [],
        createModule,
        deleteModule,
        updateModule
    }) => {
    const {courseId} = useParams();
    return (<div className="col-4">
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
            <li onClick={createModule} className='list-group-item'>
                <i className='fas fa-plus-circle'></i>
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
        createModule: () => dispatch({type: 'CREATE_MODULE'}),
        deleteModule: (item) => dispatch({
            type: 'DELETE_MODULE',
            moduleToDelete: item}),
        updateModule: (module) => dispatch({
            type: 'UPDATE_MODULE',
            module
        })
    }
}

export default connect(stpm, dtpm)
(ModuleList)