import PatientInfo from './PatientInfo'
import {useState} from 'react'
import '../style/Ward.css'

const WardPatient = ({patient, specialists, handleAssignment, handleTreatment, healthDecreaseOnNewSymptom}) => {

    const [symptomsNumber, setSymptomsNumber] = useState(3);


    const increaseSymptoms = () => {
        setSymptomsNumber(symptomsNumber + 1)
        healthDecreaseOnNewSymptom(patient)
    }

    const submitAssingment = (evt) => {
        handleAssignment(evt.target.value, patient.id)
    }
    

    const specialistsDropdown = specialists.map((specialist, index) => {
        return (
            <option key={specialist.id} value={specialist.id}>{`Dr. ${specialist.name}`}</option>
        )
    })

    return (
        <>
        <div className="ward-patient">
            <PatientInfo patient={patient}  symptomsNumber={symptomsNumber}/>
            <div className="buttons">
            <button onClick={increaseSymptoms} className="symptom-button"> Show another symptom</button>
            <select name="specialists" id="specialists" onChange={submitAssingment} className="doctor-select">
                <option value="" disabled selected>Assign Specialist</option>
            {specialistsDropdown}
            </select>
            <br/>
            <button value={patient.id} onClick={handleTreatment} className="treat-button">TREAT</button>
            </div>
        </div>
        </>
    )
}

export default WardPatient;