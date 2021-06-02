import {Link} from 'react-router-dom';
import '../style/Welcome.css'

const Welcome = () => {

    return(
        <>
          <p className="Title">THE WARD</p>
          <img/>
          <div className="flex-buttons">
          <Link to="/gameplay">
            <button className="start-game">Start Diagnosing</button>
          </Link>
          <button className="rules-button">The Rules</button>
          </div>
        </>
    )
}

export default Welcome;