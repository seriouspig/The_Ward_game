import WaitingPatient from './WaitingPatient'

const WaitingRoom = ({waitingPatients, handleAdmission}) => {

    if (waitingPatients === 0) {
        return (<p>Loading...</p>)
    }

    const waiting = waitingPatients.map((patient, index ) => {
        return (
            <li key={index} className="component-item">
                <div >
                    <WaitingPatient key={patient.id} patient={patient} handleAdmission={handleAdmission}/>
                </div>
            </li>
        )
    })

    return(
        <>
        <h2>Waiting Room</h2>
        <ul>
        {waiting}
        </ul>
        </>
    )
}

export default WaitingRoom;