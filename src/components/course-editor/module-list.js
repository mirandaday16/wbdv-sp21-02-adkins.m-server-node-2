import React from 'react'

const ModuleList = (
    {}) => {

    return(
            <div className="col-4">
                <ul className="modules-list-group">
                    <li className="list-group-item">
                        <a href="#">
                            Module 1 - jQuery
                        </a>
                    </li>
                    <li className="list-group-item active">
                        <a href="#">
                            Module 2 - React
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a href="#">
                            Module 3 - Redux
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a href="#">
                            Module 4 - Native
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a href="#">
                            Module 5 - Angular
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a href="#">
                            Module 6 - Node
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a href="#">
                            Module 7 - Mongo
                        </a>
                    </li>
                </ul>
            </div>
    )
}

export default ModuleList;