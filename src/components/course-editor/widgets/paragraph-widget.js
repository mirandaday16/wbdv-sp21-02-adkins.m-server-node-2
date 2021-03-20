import React, {useState} from 'react'

const ParagraphWidget = ({widget, updateWidget, deleteWidget}) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    const [editing, setEditing] = useState(false)
    return (

        <>{
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

                    <textarea
                        className="form-control"
                        value={cachedWidget.text}
                        onChange={(e) =>
                            setCachedWidget({
                                ...cachedWidget,
                                text: e.target.value
                            })}
                    ></textarea>
                </>
        }
            {
                !editing &&
                <p>
                    <i onClick={() => setEditing(true)}
                       className="fas fa-cog mda-padded-icon mda-toggle-icon float-right"></i>

                    {cachedWidget.text}
                </p>
            }

        </>
    )
}

export default ParagraphWidget