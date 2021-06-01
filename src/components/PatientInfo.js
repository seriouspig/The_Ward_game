import './PatientInfo.css'
import Symptoms from './Symptoms'

const PatientInfo = ({patient, symptomsNumber}) => {

    return (
        <>
        <div className="flex-container">
        <img src={`/images/patients/${patient.name}.png`} className="photo"/>
            <div>
            <p>NAME: {patient.name}</p>
            <p>AGE: {patient.age}</p>
            <p>HEALTH: {patient.health}</p>
            </div>
            <Symptoms patient={patient}  symptomsNumber={symptomsNumber}/>
        </div>
        </>
    )
}

export default PatientInfo;