import React, {useState} from 'react'

const EditableItem = (
    {
        deleteItem,
        item = {
            title: "Some Title",
            _id: "ABC"
        }
    }) => {
    const [editing, setEditing] = useState(false)
    return (
        <>
            {
                !editing &&
                <>
                    <a className="mda-link-text" href="#">
                        {item.title}
                    </a>
                    <i onClick={() => setEditing(true)} className='fas fa-edit'></i>
                </>
            }
            {
                editing &&
                <>
                    <input/>
                    <i onClick={() => setEditing(false)} className='fas fa-check'></i>
                    <i onClick={() => deleteItem(item)} className='fas fa-times'></i>
                </>
            }

        </>
    )
}

export default EditableItem