import React from 'react'
import PatientInfo from './PatientInfo'
import './PatientInfo.css'

const WaitingPatient = ({patient, handleAdmission}) => {
    return (
        <div>
            <p>Waiting Patient</p>
            <div className="component">
            <PatientInfo patient={patient} />
            <button value={patient.id} onClick={handleAdmission}>Admit</button>
            </div>
        </div>
    )
}

export default WaitingPatient
