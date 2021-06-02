import React, {useState, useEffect} from 'react'
import '../style/Popup.css'
 
const Popup = ({isShown, onClose, content, timer}) => {
    useEffect(() => {
        if (isShown && timer) {
            setTimeout(onClose, timer)
        }
    }, [isShown]) 

    if (!isShown) {
        return null;
    }

    return (
        <div className="popup-container">
            <div className="popup">
                { content }
                <p className="close-button" onClick={onClose}>Close</p>
            </div>
        </div>
    )
}

export default Popup
