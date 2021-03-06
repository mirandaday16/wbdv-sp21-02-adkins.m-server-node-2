import React from 'react'
import {connect} from 'react-redux'
import moduleReducer from "../../reducers/modules-reducer";

const ModuleList = (
    {
        myModules = [],
        createModule=() => alert("Create Module 234")
    }) =>

    <div className="col-4">
        <ul className="modules-list-group">
            {
                myModules.map(module =>
                    <li className='list-group-item'>
                        {module.title}
                    </li>
                )
            }
            <li onClick={createModule} className='list-group-item'>
                <i className='fas fa-plus-circle'></i>
            </li>
        </ul>
    </div>

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        createModule: () => dispatch({type: 'CREATE_MODULE'})
    }
}

export default connect(stpm, dtpm)
(ModuleList)