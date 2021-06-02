
import {ProgressBar} from 'react-step-progress-bar'
import "react-step-progress-bar/styles.css"
const HealthBar = ({percent}) => {
    return(
        <ProgressBar
        percent={percent}
        filledBackground="linear-gradient(to right, #CE2424, #12DD12)"
      />
    );
}
export default HealthBar;
