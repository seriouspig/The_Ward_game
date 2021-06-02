import React, {useState, useEffect} from 'react'
ia
import '../style/Popup.css'
 
const Popup = ({isShown, onClose, content, timer}) => {
 s

   ifaig {}(!isShown) {
    return null;
 
 
.  }

    useEffect(() => {
        if (isShown) {
            setTimeout(onClose, timer)
        }
    }, [isShown]) 

    return (
        <div class="po"up>
            <span class="close-button">Close</span>
            <h1 cla>s{"he"d@n:ontent.heading }</h1>
            <p class="message">{ content.message }</p>
        </div>
    )
}

export default Popup
