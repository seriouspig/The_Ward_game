import React from 'react'
import PatientInfo from './PatientInfo'
import '../style/PatientInfo.css'

const WaitingPatient = ({patient, handleAdmission}) => {
    return (
        <div>
            <div className="component">
            <PatientInfo patient={patient} />
            <div className="button-div">
                <button className="waiting-button" value={patient.id} onClick={handleAdmission}>ADMIT</button>
            </div>
            </div>
        </div>
    )
}

export default WaitingPatient
