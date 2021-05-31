import './PatientInfo.css'

const PatientInfo = ({patient}) => {

    return (
        <>
        <div className="flex-container">
        <img src={`/images/patients/${patient.name}.png`} className="photo"/>
            <div>
            <p>NAME: {patient.name}</p>
            <p>AGE: {patient.age}</p>
            <p>HEALTH: {patient.health}</p>
            </div>
        </div>
        </>
    )
}

export default PatientInfo;