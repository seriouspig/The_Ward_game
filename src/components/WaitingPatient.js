import React from 'react'
import PatientInfo from './PatientInfo'

const WaitingPatient = ({patient, handleAdmission}) => {
    return (
        <div>
            <p>Waiting Patient</p>
            <PatientInfo patient={patient} />
            <button value={patient.id} onClick={handleAdmission}>Admit</button>
            
        </div>
    )
}

export default WaitingPatient
