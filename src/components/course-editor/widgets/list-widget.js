import React, {useState} from 'react'

const ListWidget = ({widget, updateWidget, deleteWidget}) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    const [editing, setEditing] = useState(false)
    return(
        <>
            {
                editing &&
                    <>
                        <input type="checkbox"/>
                        Ordered
                        <br/>
                        Item List
                        <textarea className="form-control"></textarea>
                    </>
            }
            {!
                editing &&
                <>
                    <ul>
                        <li>123</li>
                        <li>234</li>
                        <li>345</li>
                        <li>456</li>
                    </ul>
                </>
            }
        </>
    )
}

export default ListWidget