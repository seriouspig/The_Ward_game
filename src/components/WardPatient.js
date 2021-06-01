import PatientInfo from './PatientInfo'
import {useState} from 'react'

const WardPatient = ({patient, specialists, handleAssignment}) => {

    const [symptomsNumber, setSymptomsNumber] = useState(3);


    const increaseSymptoms = () => {
        setSymptomsNumber(symptomsNumber + 1)
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
        <button onClick={increaseSymptoms}>Show another symptom</button>
        <select name="specialists" id="specialists" onChange={submitAssingment}>
            <option value="" disabled selected>Assign Specialist</option>
           {specialistsDropdown}
        </select>
        <p>Current Specialist: {patient.specialist}</p>
        </div>
        </>
    )
}

export default WardPatient;