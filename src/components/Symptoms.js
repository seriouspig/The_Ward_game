import React from 'react'

const Symptoms = ({patient,  symptomsNumber}) => {

    var _ = require('lodash');

    const symptomsAssignment = (patient) => {
        if (patient.status === "WAITING") {
            return symptoms.slice(0,3)
        }
        else if (patient.status === "Admitted") {
            return symptoms.slice(0, symptomsNumber)
        }
        
    } 
    

    const symptoms = patient.illness.allSymptoms.map((symptom, index) => {
        return (
            <li key={index} >
                
                {symptom}
                

            </li>
        )
    })

    return (
        <>
        <h2>Ward</h2>
        <ul>
        {symptomsAssignment(patient)}
        </ul>
        </>
    )
}

export default Symptoms
