import React, {useState} from 'react'

const ImageWidget = ({widget, updateWidget, deleteWidget}) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    const [editing, setEditing] = useState(false)
    return (
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
                    <>
                        <label htmlFor="source-input">Source URL:</label>
                        <input
                            id="source-input"
                            value={cachedWidget.src}
                            className="form-control"
                            onChange={(e) =>
                                setCachedWidget({
                                    ...cachedWidget,
                                    src: e.target.value
                                })}/>

                        <label htmlFor="width-input">Image Width:</label>
                        <input
                            id="width-input"
                            value={cachedWidget.width}
                            className="form-control"
                            onChange={(e) =>
                                setCachedWidget({
                                    ...cachedWidget,
                                    width: e.target.value
                                })}/>

                        <label htmlFor="height-input">Image Height:</label>
                        <input
                            id="height-input"
                            value={cachedWidget.height}
                            className="form-control"
                            onChange={(e) =>
                                setCachedWidget({
                                    ...cachedWidget,
                                    height: e.target.value
                                })}/>
                    </>
                </>
            }
            {
                !editing &&
                <>
                    <i onClick={() => setEditing(true)}
                       className="fas fa-cog mda-padded-icon mda-toggle-icon float-right"></i>
                    <img
                        width={cachedWidget.width}
                        height={cachedWidget.height}
                        src={cachedWidget.src}/>
                </>
            }
        </>

    )
}

export default ImageWidget