import React from "react";
import "../index.css";

export default class NavigationBar
    extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mda-sticky-nav-bar">
            <div className="row">
                <div className="col-1 mda-center-in-div">
                    <i className="fas fa-bars"></i>
                </div>
                <div className="col-3 d-none d-md-block mda-nav-bar-title">
                    <i className="fas mda-padded-icon fa-chalkboard-teacher"></i>
                    WhiteBoard
                </div>
                <div className="col-7">
                    <input className="form-control mda-center-in-div mda-body-text"
                           placeholder="New Course Name"/>
                </div>
                <div className="col-1  mda-center-in-div mda-clickable-icon">
                    <i onClick={this.props.addCourse} className="fas fa-plus-circle"></i>
                </div>
            </div>
        </div>
        )
    }
    }

