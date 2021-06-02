import {Link} from 'react-router-dom';
import '../style/Welcome.css'
import Popup from './Popup'
import PopupLarge from './PopupLarge'
import { useState } from 'react'

const Welcome = () => {

    const [isPopupShown, setIsPopupShown] = useState(false)

    return(
        <>
          <p className="Title">THE WARD</p>
          <img/>
          <div className="flex-buttons">
          <PopupLarge content="testing the popup!!!" onClose={() => setIsPopupShown(false)} isShown={isPopupShown} />
          <Link to="/gameplay">
            <button className="start-game">Start Diagnosing</button>
          </Link>
          <button className="rules-button" onClick={() => setIsPopupShown(true)}>The Rules</button>
          </div>
          <img src="/images/backgrounds/guy.gif" className="guy"/>
        </>
    )
}

export default Welcome;