import WardPatient from './WardPatient'
import '../style/Ward.css'

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
        <ul className="ward-grid">
        {admitted}
        </ul>
        </>
    )
}

export default Ward;