import React from "react";
import {Link} from "react-router-dom";

const CourseEditor = ({props}) =>
    <div>
        <div class="container shadow mda-widget-window">
            {/*// Headline*/}
            <h1 class="mda-h1">Course Editor: {this.props}
                <i onClick={() => props.history.goBack()} className="fas fa-times-circle float-right"></i>
            </h1>

            <div class="form-group row">
                <label class="col-4 col-form-label"></label>
                {/*// Tab Menu*/}
                <div class="col-8">
                    <ul class="nav nav-tabs justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Build</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pages</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Theme</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Store</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Apps</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Settings</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fas fa-plus"></i>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>

            <div class="row mda-widget-body">

                {/*// Left Side Menu*/}
                <div class="col-4">
                    <ul class="modules-list-group">
                        <li class="list-group-item">
                            <a href="#" >
                                Module 1 - jQuery
                            </a>
                        </li>
                        <li class="list-group-item active">
                            <a href="#">
                                Module 2 - React
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="#">
                                Module 3 - Redux
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="#">
                                Module 4 - Native
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="#">
                                Module 5 - Angular
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="#">
                                Module 6 - Node
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="#">
                                Module 7 - Mongo
                            </a>
                        </li>
                    </ul>
                </div>

                {/*// Pills Menu*/}
                <div class="col-8 mda-page-background">
                    <ul class="nav nav-pills justify-content-end pills-section-underlined">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Topic 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Topic 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Topic 3</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Topic 4</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fas fa-plus"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                {/*// Content intentionally left blank!*/}
            </div>
        </div>
    </div>

export default CourseEditor