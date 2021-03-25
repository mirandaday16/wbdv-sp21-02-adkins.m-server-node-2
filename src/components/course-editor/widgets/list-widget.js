import React, {useState} from 'react'

const ListWidget = ({widget, updateWidget, deleteWidget}) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    const [editing, setEditing] = useState(false)
    return(
        <>
            {
                editing &&
                    <>
                        <i onClick={() => {
                            updateWidget(widget.id, cachedWidget)
                            setEditing(false)
                        }}
                           className="fas fa-check mda-padded-icon mda-toggle-icon float-right"></i>
                        <i onClick={() => {
                            deleteWidget(widget.id)
                            setEditing(false)
                        }
                        }
                           className="fas fa-trash mda-padded-icon mda-toggle-icon float-right"></i>

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
                    <i onClick={() => setEditing(true)}
                       className="fas fa-cog mda-padded-icon mda-toggle-icon float-right"></i>

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