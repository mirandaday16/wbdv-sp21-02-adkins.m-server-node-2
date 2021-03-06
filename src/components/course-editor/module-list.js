import React from 'react'
import {connect} from 'react-redux'
import moduleReducer from "../../reducers/modules-reducer";

const ModuleList = (
    {myModules = []}) =>

    <div className="col-4">
        <ul className="modules-list-group">
            {
                myModules.map(module =>
                    <li className='list-group-item'>
                        {module.title}
                    </li>
                )
            }
        </ul>
    </div>

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {}

export default connect(stpm, dtpm)
(ModuleList)