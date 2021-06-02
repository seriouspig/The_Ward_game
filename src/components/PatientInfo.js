import '../style/PatientInfo.css'
import Symptoms from './Symptoms'
import HealthBar from './HealthBar'

const PatientInfo = ({patient, symptomsNumber}) => {

    return (
        <>
        <div className="health-bar">
            <HealthBar percent={patient.health} />
        </div>
        <div className="flex-container">
        <img src={`/images/patients/${patient.name}.png`} className="photo"/>
            <div>
            <p className="patient-data">{patient.name}</p>
            <p className="patient-data">Age:{patient.age}</p>
            <p className="patient-data">Symptoms:</p>
            <Symptoms patient={patient}  symptomsNumber={symptomsNumber}/>
            </div>   
        </div>
        </>
    )
}

export default PatientInfo;