import React from 'react'
import PatientInfo from './PatientInfo'

const WaitingPatient = ({patient, handleAdmission}) => {
    return (
        <div>
            <p>Waiting Patient</p>
            <PatientInfo patient={patient} />
            
        </div>
    )
}

export default WaitingPatient
