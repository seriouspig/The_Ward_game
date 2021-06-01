import WardPatient from './WardPatient'

const Ward = ({admittedPatients, specialists, handleAssignment, handleTreatment}) => {

    if (admittedPatients === 0) {
        return (<p>Loading...</p>)
    }

    const admitted = admittedPatients.map((patient, index) => {
        return (
            <li key={index}>
                <div>
                    <WardPatient patient={patient} specialists={specialists} handleAssignment={handleAssignment} handleTreatment={handleTreatment}/>
                </div>

            </li>
        )
    })

    return(
        <>
        <h2>Ward</h2>
        <ul>
        {admitted}
        </ul>
        </>
    )
}

export default Ward;