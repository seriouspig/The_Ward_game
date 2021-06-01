import PatientInfo from './PatientInfo'
import {useState} from 'react'

const WardPatient = ({patient, specialists}) => {

    const [symptomsNumber, setSymptomsNumber] = useState(3);


    const increaseSymptoms = () => {
        setSymptomsNumber(symptomsNumber + 1)
    }

    const specialistsDropdown = specialists.map((specialist, index) => {
        return (
            <option value="{{specialist.id}},{{patient.id}}">{`Dr. ${specialist.name}`}</option>
        )
    })

    return (
        <>
        <div className="ward-patient">
        <PatientInfo patient={patient}  symptomsNumber={symptomsNumber}/>
        <button onClick={increaseSymptoms}>Show another symptom</button>
        <select name="specialists" id="specialists" >
            <option value="" disabled selected>Assign Specialist</option>
           {specialistsDropdown}
        </select>
        <p>Current Specialist: {patient.specialist}</p>
        </div>
        </>
    )
}

export default WardPatient;