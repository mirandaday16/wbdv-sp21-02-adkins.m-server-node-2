import React from 'react'

const HeadingWidget = ({widget}) => {
    return(
        <div>
            <h1 className="mda-h1">{widget.text}</h1>
        </div>
    )
}

export default HeadingWidget