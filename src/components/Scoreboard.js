import '../style/ScoreTimer.css'

const Scoreboard = ({points}) => {
    return(
        <>
        <p className="scores">SCORE: {points}</p>
        </>
    )

}

export default Scoreboard;