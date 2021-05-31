import WaitingRoom from './WaitingRoom'
import Ward from './Ward'
import SpecialistGlossary from './SpecialistGlossary'
import {useState, useEffect} from 'react'
import Request from '../helpers/request';

const Gameplay = () => {

    const [patients, setPatients] = useState([])
    const [specialists, setSpecialists] = useState([])
    const [points, setPoints] = useState(0) 

    useEffect(() => {
        const request = new Request();
    
        request.get('http://localhost:8080/api/patients')
        .then((data) => {
            setPatients(data)
        })
        }, []) 
    
    //   useEffect(() => {
    //   }, [patients])
    
    // const visiblePatients = (patientData) => {
    //     let visiblePatientsList = [];
    //         while(visiblePatientsList.length < 8){
    //             visiblePatientsList.push(patientData[Math.floor((Math.random() * 50) + 1)])
    //         }
    //         return visiblePatientsList;
    //     }

        //   const changeStatus = (event) => {
    //     console.log(event)
    //     for (const patient of patients) {
    //       if (patient.id === parseInt(event.target.value)) {
            
            
    //         // setPatients({ ...patients.patient,
    //         //             patient.status: "Admitted"
            
    //         console.log("Found patient")
    //         patient.status = "Admitted";
    //       }
    //     }
    //     setPatients(patients)
        
    //   }
    

    return(
        <>
        <h3>gameplay</h3>
        <SpecialistGlossary />
        <WaitingRoom patients={patients}/>
        <Ward />
        </>
    )
}

export default Gameplay;