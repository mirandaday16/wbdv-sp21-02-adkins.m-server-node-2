import React, {useState} from 'react'

const EditableItem = (
    {
        deleteItem,
        updateItem,
        item = {
            title: "Some Title",
            _id: "ABC"
        }
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                    <a className="mda-link-text" href="#">
                        {item.title}
                    </a>
                    <i onClick={() =>
                        setEditing(true)
                    } className='fas fa-edit'></i>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) =>
                            setCachedItem({
                                ...cachedItem,
                                title: e.target.value
                            })}
                        value={cachedItem.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }
                    } className='fas fa-check'></i>
                    <i onClick={
                        () => deleteItem(item)
                    } className='fas fa-times'></i>
                </>
            }

        </>
    )
}

export default EditableItem