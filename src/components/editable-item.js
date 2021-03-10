import React, {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'

const EditableItem = (
    {
        to,
        type,
        itemId,
        deleteItem,
        updateItem,
        item = {
            title: "Some Title",
            _id: "ABC"
        }
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    const location = useLocation();
    const path = location["pathname"]
    let className = (path.includes(itemId)) ? "active" : "";
    return (
        <>
            {
                !editing &&
                <>
                    <li className={
                        `${type === 'module'? 'list-group-item' : 'nav-link'}
                         ${className}`
                    }>

                        <Link className="mda-link-text" to={to}>
                            {item.title}
                        </Link>
                        <i onClick={() => {
                            setEditing(true)
                        }
                        } className='fas fa-edit mda-padded-icon'></i>
                    </li>
                </>
            }
            {
                editing &&
                <>
                    <a className={
                        `${type === 'module'? 'list-group-item' : 'nav-item'}
                        ${className}`
                    }>
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
                        } className='fas fa-check mda-padded-icon'></i>
                        <i onClick={
                            () => deleteItem(item)
                        } className='fas fa-times mda-padded-icon'></i>
                    </a>
                </>
            }

        </>
    )
}


export default EditableItem