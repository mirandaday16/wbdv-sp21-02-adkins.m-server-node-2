import React, {useState} from 'react'

const HeadingWidget = ({widget, updateWidget, deleteWidget}) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    const [editing, setEditing] = useState(false)

    return (
        <>{
            editing &&
            <>
                <input value={cachedWidget.text}
                       onChange={(e) =>
                           setCachedWidget({
                               ...cachedWidget,
                               text: e.target.value
                           })}
                       className="form-control"/>
                <select value={cachedWidget.size}
                        onChange={(e) =>
                            setCachedWidget({
                                ...cachedWidget,
                                size: e.target.value
                            })}
                        className="form-control">
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                    <option value={6}>Heading 6</option>
                </select>
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
            </>
        }
            {
                !editing &&
                <div>
                    {widget.size == 1 && <h1 className="mda-h1">{widget.text}</h1>}
                    {widget.size == 2 && <h2 className="mda-h2">{widget.text}</h2>}
                    {widget.size == 3 && <h3 className="mda-h3">{widget.text}</h3>}
                    {widget.size == 4 && <h4 className="mda-h4">{widget.text}</h4>}
                    {widget.size == 5 && <h5 className="mda-h5">{widget.text}</h5>}
                    {widget.size == 6 && <h6 className="mda-h6">{widget.text}</h6>}

                    <i onClick={() => setEditing(true)}
                       className="fas fa-cog mda-padded-icon mda-toggle-icon float-right"></i>

                </div>
            }

        </>
    )
}

export default HeadingWidget