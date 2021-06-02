import React from 'react'
import '../style/ScoreTimer.css'

const Counter = ({counter}) => {
    return (
        <div className="timer">
            TIME LEFT: {counter}
        </div>
    )
}

export default Counter
