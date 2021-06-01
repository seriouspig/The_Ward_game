import '../style/PatientInfo.css'
import Symptoms from './Symptoms'

const PatientInfo = ({patient, symptomsNumber}) => {

    return (
        <>
        <p>HEALTH: {patient.health}</p>
        <div className="flex-container">
        <img src={`/images/patients/${patient.name}.png`} className="photo"/>
            <div>
            <p className="patient-data">{patient.name}</p>
            <p className="patient-data">Age:{patient.age}</p>
            <p className="patient-data">Symptoms</p>
            <Symptoms patient={patient}  symptomsNumber={symptomsNumber}/>
            </div>   
        </div>
        </>
    )
}

export default PatientInfo;