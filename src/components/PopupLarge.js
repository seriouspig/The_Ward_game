import React, {useState, useEffect} from 'react'
import '../style/PopupLarge.css'
 
const PopupLarge = ({isShown, onClose, content, timer}) => {
    useEffect(() => {
        if (isShown && timer) {
            setTimeout(onClose, timer)
        }
    }, [isShown]) 

    if (!isShown) {
        return null;
    }

    return (
        <div className="popuplarge-container">
            <div className="popuplarge">
                <p className="messagelarge">{ content }</p>
                <p className="close-buttonlarge" onClick={onClose}>Close</p>
            </div>
        </div>
    )
}

export default PopupLarge
