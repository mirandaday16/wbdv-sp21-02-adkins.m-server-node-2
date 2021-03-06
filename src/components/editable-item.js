import React from 'react'

const EditableItem = (
    {
        item={
            title: "Some Title",
            _id: "ABC"}
    }) => {
    return (
        <span className="mda-body-text">{item.title}</span>
    )
}

export default EditableItem