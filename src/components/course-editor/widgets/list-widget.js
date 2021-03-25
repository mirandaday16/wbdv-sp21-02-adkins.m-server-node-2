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

                        <input type="checkbox"
                               checked={cachedWidget.ordered}
                               onChange={(e) =>
                                   setCachedWidget({
                                       ...cachedWidget,
                                       ordered: e.target.checked
                                   })}/>
                        Ordered
                        <br/>
                        Item List
                        <textarea
                            value={cachedWidget.text}
                            className="form-control"
                            rows="10"
                            onChange={(e) =>
                                setCachedWidget({
                                    ...cachedWidget,
                                    text: e.target.value
                                })}>
                        </textarea>
                    </>
            }
            {!
                editing &&
                <>
                    <i onClick={() => setEditing(true)}
                       className="fas fa-cog mda-padded-icon mda-toggle-icon float-right"></i>

                    <ul>
                        {cachedWidget.text.split("\n").map((item) => {
                            return (
                                <li>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </>
            }
        </>
    )
}

export default ListWidget